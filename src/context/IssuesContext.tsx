/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';
import { api } from '../lib/axios';

interface IIssues {
  title: string;
  updated_at: string;
  body: string;
}

interface IIsuesContext {
  issuesData: IIssues[];
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IIsuesContext);

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesData, setIssuesData] = useState<IIssues[]>([]);

  const fetchIssues = useCallback(async (query?: string) => {
    const { data } = await api.get(
      'repos/Joaopsguimaraes/desafio03-github-blog/issues',
      {
        params: {
          _order: 'desc',
          q: query
        }
      }
    );
    setIssuesData(data);
  }, []);


  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider
      value={{
        issuesData
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
