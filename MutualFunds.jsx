import React, { useState } from 'react';
import "./MutualFundPage.css"

const MutualFundPortfolio = () => {
  const portfolioData = [
    { id: 1, fUNDNAME: 'Axis Long Term Equity', CATEGORY: 'Tax saving', SIPAMOUNT: 5000, SHARPERATIO: 0.068 },
    { id: 2, fUNDNAME: 'DSPBR Opportunities', CATEGORY: 'Debt', SIPAMOUNT: 7000, SHARPERATIO: 0.046 },
    { id: 3, fUNDNAME: 'Mirae Assest Emerging Bluechip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.048 },
    { id: 4, fUNDNAME: 'ICICI Pru Short Term Plan', CATEGORY: 'Multi Cap', SIPAMOUNT: 2000, SHARPERATIO: 0.043 },
    { id:  5, fUNDNAME: 'Principal Emerging Bluechip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.044 },
    { id:  6, fUNDNAME: 'JM Short Term', CATEGORY: 'Mid Cap', SIPAMOUNT: 8000, SHARPERATIO: 0.013 },
    { id:  7, fUNDNAME: 'Tata Dividend Yield', CATEGORY: 'Small Cap', SIPAMOUNT: 6000, SHARPERATIO: 0.043 },
    { id:  8, fUNDNAME: 'DSP Small Cap', CATEGORY: 'Large Cap', SIPAMOUNT: 3000, SHARPERATIO: 0.023 },
    { id:  9, fUNDNAME: 'Kotak BlueChip', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
    { id:  10, fUNDNAME: 'Franklin India Prima', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
    { id:  11, fUNDNAME: 'HDFC Capital Bulider Value', CATEGORY: 'Hybrid', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
    { id:  12, fUNDNAME: 'SBI Long Term Equity', CATEGORY: 'Small-cap', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
    { id:  13, fUNDNAME: 'Reliance Small Cap ', CATEGORY: 'Value', SIPAMOUNT: 3000, SHARPERATIO: 0.043 },
  ];
  return (
    <div className="container">
      <center>
        <h2  className="text-center"  style={{ color: '#2C3539' }}>Mutual Fund Portfolio:</h2>
        <table className="table table-hover table-bordered">
        
          <thead className="table-primary" style={{ width: '80%', margin: 'auto' }}>
            <tr >
              <th>ID</th>
              <th>fUNDNAME</th>
              <th>CATEGORY</th>
              <th>SIPAMOUNT</th>
              <th>SHARPERATIO</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((fund) => (
              <tr key={fund.id}   className={fund.id % 2 === 0 ? 'table-secondary' : 'table-info'}>
                <td>{fund.id}</td>
                <td>{fund.fUNDNAME}</td>
                <td>{fund.CATEGORY}</td>
                <td>{fund.SIPAMOUNT}</td>
                <td>{fund.SHARPERATIO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

const MutualFunds = () => {
  const [investorName, setInvestorName] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [investmentGoal, setInvestmentGoal] = useState('');
  const [result, setResult] = useState(null);

   const calculateReturns = () => {
     const returns = investmentAmount * 0.05 * duration;
     setResult(returns);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     calculateReturns();
   };

  return (
    <div className="background-container">
      <header>
        {/* <img
          src="images/infi.jpg"  // Replace "logo.png" with the actual filename of your logo
          alt="Infinity Wallet Pay"
          style={{ width: '50px', height: '50px', display: 'block', margin: 'auto' }}
        /> */}
        <h2>
  <marquee behavior="scroll" direction="left">
    INFINITY WALLET PAY MUTUAL FUNDS  
  </marquee>
</h2>
        <p>
          Mutual funds are a type of investment vehicle consisting of a
          portfolio of stocks, bonds, or other securities. They offer a way
          for investors to pool their money together, providing
          diversification and professional management. Use this calculator to
          estimate potential returns based on your investment details.
          Most mutual funds fall into one of four main categories – money market funds,
          bond funds, stock funds, and target date funds.
          Each type has different features, risks, and rewards.
          A mutual fund is an investment fund that pools money from many investors to purchase securities.
          The term is typically used in the United States, Canada, and India, while similar structures across the globe include the SICAV in Europe, and the open-ended investment company in the UK.
        </p>
      </header>
      {/* Image */}
      <div  className="background-container" style={{ alignItems: 'center' }}>
        <img
          src="images/grap.png"
          alt="Graph"
          style={{ backgroundColor: '#87CEFA',float:'left' , width: "50%", height: '50%' }}
        />
        <img
          src="images/grap.png"
          alt="Graph"
          style={{ backgroundColor: '#87CEFA',float:'right', width: "50%", height: '50%' }}
        />
      </div>
      <p>
        To understand how mutual funds work, let us first understand the concept of NAV (Net Asset Value).
        NAV per unit is the price at which investors can buy or redeem their mutual fund investments. Investors in mutual funds are allotted units proportional to their investments and this is calculated on the basis of the NAV. For example, if you invest Rs 500 in a mutual fund with an NAV of Rs 10, you will get (500/10), 50 units of the mutual fund.

        Now, the NAV of the mutual fund changes every day on the basis of the performance of the assets in the mutual fund is invested in.
        If a mutual fund invests in a particular stock whose price goes up tomorrow, the same will reflect in the NAV of the mutual fund and vice versa.
        So, in the above example, if the NAV of the mutual fund goes up to Rs 20, then your 50 units that amounted to Rs 500 earlier will now amount to Rs 1000 (500 units x Rs 20). Hence, the mutual fund’s performance is driven by its underlying assets, which generate its returns to investors.
      </p>

      {/* Mutual Fund Portfolio Component */}
      <MutualFundPortfolio />

      
      {/* <form className="background-container"
        onSubmit={handleSubmit}
        style={{ backgroundColor: '#87CEEB', padding: '10px' }}
      > */}
       {/* <h2>Fund calculator:</h2>
        <div>
          <label>
            <b> Investor Name:</b>
            <input
              type="text"
              value={investorName}
              onChange={(e) => setInvestorName(e.target.value)}
            />
          </label>
        </div>
        <div>
        <label>
             <b>Investment Amount ($):</b>
           <input
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)} 
            />
           </label>
         </div>
         <div>
          <label>
            <b> Investment Duration (years):</b>
             <input
               type="number"
               value={duration}
               onChange={(e) => setDuration(e.target.value)}
            />
          </label>
         </div>
        <div>
           <label>
             <b> Risk Tolerance:</b>
             <select
               value={riskTolerance}
               onChange={(e) => setRiskTolerance(e.target.value)}
             >
               <option value="low">Low</option>
               <option value="medium">Medium</option>
               <option value="high">High</option>
             </select>
           </label>
         </div>
         <div>
           <label>
             <b>Investment Goal:</b>
             <textarea
               value={investmentGoal}
               onChange={(e) => setInvestmentGoal(e.target.value)}
            />
          </label>
</div>
        <div>
          <button type="submit"> Calculate Returns </button>
        </div>
        {result !== null && (
          <div>
            <h2>Projected Returns:</h2>
            <p>${result}</p>
          </div>
        )}
      </form> */}
    </div> 
  );
};

export default MutualFunds;