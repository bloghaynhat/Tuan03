import "./MyFooter.css"

function MyFooter() {
    return ( <div className="footer-container">
        <div className="div-1">
            <h3>About us</h3>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
            <div className="enter-box">
                <input type="text" placeholder="Enter your email"/>
                <button>Send</button>
            </div>
        </div>
        <div className="div-2">
            <div className="div-2-con">
                <h3>Learn more</h3>
                <a href="">Our Cooks</a>
                <a href="">See Our Features</a>
                <a href="">FAQ</a>
            </div>
            <div className="div-2-con">
                <h3>Shop</h3>
                <a href="">Gift Subscription</a>
                <a href="">Send Us Feedback</a>
                
            </div>

        </div>
        <div className="div-3">
            <div className="div-2-con">
                <h3>Recipes</h3>
                <a href="">What to cook this week</a>
                <a href="">Pasta</a>
                <a href="">Dinner</a>
                <a href="">Healthy</a>
                <a href="">Vegetarian</a>
                <a href="">Vegan</a>
                <a href="">Christmas</a>
            </div>
        </div>
    </div> );
}

export default MyFooter;