// import { ActionType } from '../action-types'

export type Action =
    SearchRepositoriesAction |
    SearchRepositoriesSuccessAction |
    SearchRepositoriesErrorAction

interface SearchRepositoriesAction {
    type: 'search_repositories'
}

interface SearchRepositoriesSuccessAction {
    type: 'search_repositories_success';
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: 'search_repositories_error';
    payload: string;
}