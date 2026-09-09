"use client";

import { useState } from "react";

export default function Home() {
  const [deposit, setDeposit] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [payout, setPayout] = useState("Quarterly");

  const interest = (deposit * rate * years) / 100;

  const maturity = deposit + interest;

  const formatMoney = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="page">
      <div className="calculator">

        {/* LEFT SIDE */}
        <section className="left-panel">

          <div className="heading">
            <h1>FD Calculator</h1>
            <p>
              Estimates how much your fixed deposit investment will grow over
              time.
            </p>
          </div>

          <div className="field">
            <div className="field-header">
              <label>Deposit Amount (₹)</label>
              <div className="value-box">
                {deposit}
              </div>
            </div>

            <input
              type="range"
              min="10000"
              max="5000000"
              step="10000"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
            />

            <div className="range-labels">
              <span>10000</span>
              <span>2445000</span>
              <span>5000000</span>
            </div>
          </div>

          <div className="field">
            <div className="field-header">
              <label>Rate Of Return (%)</label>
              <div className="value-box">
                {rate}
              </div>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
            <div className="range-labels">
              <span>5%</span>
              <span>17.5%</span>
              <span>30%</span>
            </div>
          </div>

          <div className="field payout-field">
            <label>Interest Payout</label>
            <small>
              Cumulative Rate Of Return is{" "}
              <b>{rate.toFixed(2)}%</b>
            </small>
            <div className="payout-options">
              {[
                "Quarterly",
                "Half yearly",
                "Yearly",
                "At Maturity",
              ].map((item) => (
                <button
                  key={item}
                  className={payout === item ? "active" : ""}
                  onClick={() => setPayout(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <div className="field-header">
              <label>Time Period (Years)</label>
              <div className="value-box">
                {years}
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
            <div className="range-labels">
              <span>1</span>
              <span>25</span>
              <span>50</span>
            </div>
          </div>

          <button className="calculate">
            Calculate
          </button>
        </section>

        {/* RIGHT SIDE */}
        <section className="right-panel">

          <div className="summary">
            <div>
              <span>Maturity Amount</span>
              <strong>
                {formatMoney(maturity)}
              </strong>
            </div>
            <div>
              <span>Interest Earned</span>
              <strong>
                {formatMoney(interest)}
              </strong>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-legend">
              <span>
                <i className="selected-dot"></i>
                Selected Year
              </span>
              <span>
                <i className="other-dot"></i>
                Other Years
              </span>
            </div>
            <div className="chart">
              {[1, 2, 3, 4, 5].map((year) => {
                const yearInterest =
                  (deposit * rate * year) / 100;
                const yearMaturity =
                  deposit + yearInterest;
                const maxMaturity =
                  deposit + (deposit * rate * 5) / 100;
                const height =
                  (yearMaturity / maxMaturity) * 100;
                return (
                  <div
                    className="bar-container"
                    key={year}
                  >
                    <div
                      className="bar"
                      style={{
                        height: `${Math.max(
                          height,
                          20
                        )}%`,
                      }}
                      title={`${year} Year: ${formatMoney(
                        yearMaturity
                      )}`}
                    ></div>
                    <span>{year}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="divider"></div>
          <div className="bottom-cards">
            <div className="action-card personalized">
              <div className="badge">
                Personalised
              </div>
              <button className="arrow">
                {">"}
              </button>

              <h2>
                Check Suitable
                <br />
                Products For Your
                <br />
                Investment
              </h2>
              <p>
                Exclusively For You
              </p>
            </div>
            <div className="action-card help">
              <button className="arrow">
                {">"}
              </button>
              <h2>
                Need Help Finding
                <br />
                Right Product?
              </h2>
              <p>
                Get Guidance From Wealth Manager
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
