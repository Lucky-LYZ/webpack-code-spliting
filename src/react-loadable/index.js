import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import Loading from './components/Loading';

// 方式一：
// import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';


// 方式二：
const Header = Loadable({
    loader: () => import("./components/Header"),
    loading: Loading
});
const Content = Loadable({
    loader: () => import("./components/Content"),
    loading: Loading
});
const Footer = Loadable({
    loader: () => import("./components/Footer"),
    loading: Loading
});

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
