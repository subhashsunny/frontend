import React, { useState } from 'react';
import './MutualFundPage.css';

const Portfolio = () => {
    const portfolioData = [
        { id: 1, STOCK: 'Century Plyboards India', SHARES_BOUGHT: '10.35 Lakh', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 2, STOCK: 'GMR Airports', SHARES_BOUGHT: '45.00 Lakh', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.01, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 3, STOCK: 'Indian oil Corp', SHARES_BOUGHT: '1.00 Lakh', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 3.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 4, STOCK: 'Westlife Development', SHARES_BOUGHT: '1.56 Lakh', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 2.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 5, STOCK: 'NMDC', SHARES_BOUGHT: '1.8 Lakh', VALUES_OF_SHARES: '5.0 Lakh', LTP: 0.068, RETURNS_SINCE_MAY: 3.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 6, STOCK: 'Indian Hotels Co', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 7, STOCK: 'General Ins Corp Of India', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 5.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 8, STOCK: 'Sudarshan Chemical', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 6.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 9, STOCK: 'ICIC Bank', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 7.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 10, STOCK: 'Exide Industries', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 8.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 11, STOCK: 'Sun Tv Network', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 9.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 12, STOCK: 'TCNS Clothing Co', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 2.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 13, STOCK: 'MOIL', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 3.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 14, STOCK: 'GE T&D India', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 15, STOCK: 'HDFC Bank', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 16, STOCK: 'Mahindra & Mahindra', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 17, STOCK: 'Rites', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 18, STOCK: 'Aditya Birla Fashion', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -1.37 },
        { id: 19, STOCK: 'Adani Ports', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -2.47 },
        { id: 20, STOCK: 'Mahanagar Gas', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -0.47 },
        { id: 21, STOCK: 'NMDC', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.02, RETURNS_BETWEEN_JAN_APR: -2.47 },
        { id: 22, STOCK: 'Tanla Platforms', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 4.05, RETURNS_BETWEEN_JAN_APR: -1.47 },
        { id: 23, STOCK: 'Timken India', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 1.02, RETURNS_BETWEEN_JAN_APR: -1.67 },
        { id: 24, STOCK: 'Bharti Airtel', SHARES_BOUGHT: 'Tax saving', VALUES_OF_SHARES: 5000, LTP: 0.068, RETURNS_SINCE_MAY: 1.02, RETURNS_BETWEEN_JAN_APR: -1.48 },

    ];

    return (
        <div>
            <center>
                <h2 style={{ color: '#2C3539' }}>List of Stocks</h2>
                <table border={"1"} cellPadding={"4"} cellSpacing={"2"} style={{ width: '80%' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#78C7C7' }}>
                            <th>id</th>
                            <th>STOCK</th>
                            <th>SHARES_BOUGHT</th>
                            <th>VALUES_OF_SHARES</th>
                            <th>LTP</th>
                            <th>RETURNS_SINCE_MAY</th>
                            <th>RETURNS_BETWEEN_JAN_APR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {portfolioData.map((stock) => (
                            <tr key={stock.id} style={{ backgroundColor: stock.id % 2 === 0 ? '#77BFC7' : '#78C7C7' }}>
                                <td>{stock.id}</td>
                                <td>{stock.STOCK}</td>
                                <td>{stock.SHARES_BOUGHT}</td>
                                <td>{stock.VALUES_OF_SHARES}</td>
                                <td>{stock.LTP}</td>
                                <td>{stock.RETURNS_SINCE_MAY}</td>
                                <td>{stock.RETURNS_BETWEEN_JAN_APR}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    );
};

const Stocks = () => {
    return (
        <div style={{ backgroundColor: '#CFECEC', padding: '10px' }}>
            <header>
                {/* <img
                    src="images/infi.jpg"
                    alt="Infinity Wallet Pay"
                    style={{ width: '50px', height: '50px', display: 'block', margin: 'auto' }}
                /> */}
                <h2> Infinity Wallet stocks:</h2>
                <p>
                    The BSE Sensex has rallied nearly 6 per cent since the government announced a corporate tax cut on September 20.
                    However, all are not lucky as four-fifths of the BSE 500 stocks have underperformed the benchmark index during this period.
                    Only about 36 stocks among BSE 500 have strongly bounced back since the finance minister’s announcement rallying over 10 per cent.
                    Some stocks in this group such as Century Plyboards, Ashok Leyland, Indian Oil Corp, Westlife Development, Indian Hotels, GIC and Su ..
                    Read more at:
                    https://economictimes.indiatimes.com/markets/stocks/news/20-stocks-primed-for-higher-returns/articleshow/71532648.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst
                </p>
            </header>

            <div style={{ marginRight: '20px' }}>
                <img
                    src="images/stock.png"
                    alt="Graph"
                    style={{ backgroundColor: '#CFECEC', width: '100', height: 'auto' }}
                />
            </div>
            <p>
                If you buy a stock today, the credit is given by the end of the day.

                The stock exchange also ensures that the trade of stocks is honoured during the settlement.

                If the settlement cycle doesn’t happen in T+2 days, the sanctity of the stock market is lost because it means trades may not be upheld.

                Stockbrokers identify their clients by a unique code assigned to an investor.

                After the transaction is done by an investor, the stockbroker issues him/her a contract note which provides details of the transaction, such as the time and date of the stock trade.

                Apart from the purchase price of a stock, an investor is also supposed to pay brokerage fees, stamp duty, and securities transaction tax.
            </p>
            <div style={{ marginRight: '20px' }}>
                <img
                    src="images/fore.jpg"
                    alt="Graph"
                    style={{ backgroundColor: '#CFECEC', width: '100', height: 'auto' }}
                />
            </div>
            <p>
                Once listed on the stock exchanges, the stocks issued by companies can be traded in the secondary market. This buying and selling of stocks listed on the exchanges are done by stockbrokers /brokerage firms that act as the middleman between investors and the stock exchange.

                Your broker passes on your buy order for shares to the stock exchange. The stock exchange searches for a sell order for the same share.

                Once a seller and a buyer are found, a price is agreed to finalize the transaction. Post that, the stock exchange communicates to your broker that your order has been confirmed.

                This message is then passed on to you by the broker. All this happens in real-time and in seconds.
            </p>
            <Portfolio />
        </div>
    );
};

export default Stocks;