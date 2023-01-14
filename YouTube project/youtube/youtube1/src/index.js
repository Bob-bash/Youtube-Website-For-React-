import App from './App'
import ReactDom from 'react-dom'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { legacy_createStore as createStore } from  'redux'
import { Provider } from 'react-redux'
import reducer from './redux/sharedstates'   
const root=ReactDom.createRoot(document.querySelector('#root'))
const store = createStore( reducer )
root.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
)