import './Menu.css'
const Menu = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-secondary">
            <div className="menu">
                <h1>
                <a href="/">E-Learn:Your LMS</a>
                <div>
                    <ul>
                            <a aria-current="page" href="/">Home</a>
                        &emsp;&emsp;
                            <a href="/AddResources">Add a Resource</a>
                        &emsp;&emsp;
                        <div className='comp'>
                            <a href="/Company">Company</a>
                            <div className='comp-drp'>
                            <a href="/Link1">About Us</a>
                            <a href="/Link2">Customers</a>
                            <a href="/Link3">Partnerships</a>
                            </div>
                        </div>
                        &emsp;&emsp;
                        <div className='dropdown'>
                            <a href="/ResourceList">Resource List</a>
                            <div className='dropdown-content'>
                                <a href="/Link1">Link 1</a>
                                <a href="/Link2">Link 2</a>
                                <a href="/Link3">Link 3</a>
                            </div>
                        </div>
                        &emsp;&emsp;
                            <a href="/login">Sign Up</a>
                        &emsp;&emsp;
                            <a href="/SignUp">Login</a>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button className='ln'>Language</button>
                    </ul>
                    <hr></hr>
                </div>
                </h1>
            </div>
        </nav>
    );
}

export default Menu;