"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import "./style.scss";

const MortgageCalculator = ({ ...props }) => {
	const formRef = useRef(null);

	const formState = {
		mortgageAmount: 0,
		mortgageTerm: 0,
		interestRate: 0,
		mortgageType: "repayment",
	};

	const [formData, setFormData] = useState(formState);
	const [errors,setErrors] = useState({});

	const handleChange = (e) => {
		const newForm = { ...formData };

		if (e.target.type === "radio") {
			newForm.mortgageType = e.target.value;
		} else {
			newForm[e.target.name] = e.target.value;
		}

		setFormData(newForm);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { mortgageAmount, mortgageTerm, interestRate } = formData;

		if (mortgageAmount === 0 || mortgageTerm === 0 || interestRate === 0) {
			
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};

	console.log(formData);

	return (
		<div className="d-flex flex-row">
			<form
				className="mortgage-calculator d-flex flex-column bg-white rounded-4 w-100 align-items-center justify-content-center gap-4"
				ref={formRef}
				onSubmit={handleSubmit}
			>
				<div className="d-flex flex-row justify-content-between align-items-center gap-5">
					<h4>Mortgage Calculator</h4>
					<a href="#" onclick="" className="btn btn-link p-0">
						Clear All
					</a>
				</div>

				<div className="form-group d-flex flex-column w-75 gap-1">
					<label htmlFor="mortgageAmount" className="mr-2">
						Mortgage Amount
					</label>
					<div class="input-group mt-1">
						<span class="input-group-text bg-primary-subtle">£</span>
						<input
							type="number"
							name="mortgageAmount"
							id="mortgageAmount"
							className="form-control mr-2"
							value={formData.mortgageAmount}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="form-group w-75 d-flex align-items-center gap-4 ">
					<div className=" w-30">
						<label htmlFor="mortgageTerm">Mortgage Term</label>
						<div class="input-group mt-1">
							<input
								type="number"
								name="mortgageTerm"
								id="mortgageTerm"
								className="form-control"
								value={formData.mortgageTerm}
								onChange={handleChange}
							/>
							<span class="input-group-text bg-primary-subtle">Years</span>
						</div>
					</div>

					<div className=" w-30">
						<label htmlFor="interestRate">Interest Rate</label>
						<div class="input-group mt-1">
							<input
								type="number"
								name="interestRate"
								id="interestRate"
								className="form-control"
								value={formData.interestRate}
								onChange={handleChange}
							/>
							<span class="input-group-text bg-primary-subtle ">%</span>
						</div>
					</div>
				</div>

				<div className="form-group w-75 d-flex flex-column gap-2">
					<label htmlFor="mortgageType">Mortgage type</label>
					<div className="border border-secondary-subtle p-2 d-flex gap-3 rounded-1">
						<input
							type="radio"
							name="mortgageType"
							id="repayment"
							value="repayment"
							checked={formData.mortgageType === "repayment"}
							onChange={handleChange}
						/>
						<label htmlFor="repayment">Repayment</label>
					</div>
					<div className="border border-secondary-subtle p-2 d-flex gap-3 rounded-1">
						<input
							type="radio"
							name="mortgageType"
							id="interestOnly"
							value="interestOnly"
							checked={formData.mortgageType === "interestOnly"}
							onChange={handleChange}
						/>
						<label htmlFor="interestOnly">Interest Only</label>
					</div>
				</div>

				<div className="w-75">
					<button
						type="submit"
						className="btn btn-primary w-70 rounded-4 d-flex align-items-center text-black submitButton"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className="me-2"
						>
							<path
								fill="black"
								d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
							/>
						</svg>
						Calculate Repayments
					</button>
				</div>
			</form>
			<div className="resultsContainer text-white">
				<h2>Your Results</h2>
				<p>
					Your results are shown below based on the information you provided. To adjust the results, edit the form
					and click "calculate repayments" again.
				</p>
				<div>
					<h3>Your monthly repayments</h3>
					<div> </div>
					<h3>Total you'll repay over the term</h3>
					<div> </div>
				</div>
			</div>
		</div>
	);
};

export default MortgageCalculator;
