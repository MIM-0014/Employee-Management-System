

const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="border-2 border-red-400">
                <form action="">
                    <input type="email" placeholder="Enter Your Email" />
                    <input type="password" placeholder="Enter Your Password" />
                    <button type="submit">Login</button>
                </form>

            </div>
            
        </div>
    );
};

export default Login;