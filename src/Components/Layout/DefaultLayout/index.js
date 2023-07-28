import Header from '~/Components/Layout/components/Header';
import Sidebar from '~/Components/Layout/DefaultLayout/Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
