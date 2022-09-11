import { useContext } from 'react';
import { IssuesContext } from '../context/IssuesContext';

export const useIssues = () => useContext(IssuesContext);
