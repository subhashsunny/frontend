function Transactions() {
    const [typeofTrans, settypeofTrans] = useState("");
    const [amount, setamount] = useState("");
    const [username, setusername] = useState("");
    const [bill_num, setbillnum] = useState("");
    const navigate = useNavigate();

    function loginNavi(event) {
        event.preventDefault();
        navigate('/login');
    }
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/transactions/save", {
                typeofTrans: typeofTrans,
                amount: amount,
                username: username,
                bill_num: bill_num,
            });
        } catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <div class="container">
                <div class="row">
                    <h2>Bill Payment</h2>
                    <hr />
                </div>

                <div class="row">
                    <div class="col-sm-6">

                        <form>
                            <div class="form-group">
                                <label>bill_num</label>
                                <input type="number" class="form-control" name="bill_num" id="bill_num" placeholder="Enter bill_num"

                                    value={bill_num}
                                    onChange={(event) => {
                                        setbillnum(event.target.value);
                                    }}

                                />

                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="Password" class="form-control" id="lastName" placeholder="Enter Password"

                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Transactions;