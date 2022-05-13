import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('')
    const dispatch = useDispatch()
    const { data, error, loading } = useTypedSelector(state => state.repositories)
    console.log(error)
    const { searchRepositories } = useActions()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList