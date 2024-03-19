import { useState } from "react";
import Footer from "./Footer";

function Quiz() {
	const [answers, setAnswers] = useState({});
	const [totalPoints, setTotalPoints] = useState(0);
	const [resultMessage, setResultMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const questions = [
		{
			question: "Would you say that we are in a climate emergency?",
			options: ["Yes", "No", "Not sure"],
			criteria: {
				Yes: 0,
				No: 10,
				"Not sure": 5,
			},
		},
		{
			question: "Do you know the correct order of the 3Rs?",
			options: [
				"Reuse/Reduce/Recycle",
				"Recycle/Reduce/Reuse",
				"Reduce/Reuse/Recycle",
				"Randoms/Rubics/Ruler",
			],
			criteria: {
				"Reuse/Reduce/Recycle": 5,
				"Recycle/Reduce/Reuse": 5,
				"Reduce/Reuse/Recycle": 0,
				"Randoms/Rubics/Ruler": 10,
			},
		},
		{
			question: "How much meat do you eat each week?",
			options: [
				"None - I'm a vegetarian/vegan",
				"Minimal (once or twice a week)",
				"Everyday",
				"Loads - more than once a day",
			],
			criteria: {
				"None - I'm a vegetarian/vegan": 0,
				"Minimal (once or twice a week)": 5,
				Everyday: 10,
				"Loads - more than once a day": 15,
			},
		},
		{
			question: "Does your house use renewable energy?",
			options: ["Yes", "No", "I don't know"],
			criteria: {
				Yes: 0,
				No: 10,
				"I don't know": 5,
			},
		},
		{
			question: "How many petrol/diesel cars does your family have?",
			options: ["0", "1", "2", "3", "4 or more"],
			criteria: {
				0: 0,
				1: 5,
				2: 10,
				3: 15,
				"4 or more": 20,
			},
		},
		{
			question: "How do you get to work/school?",
			options: ["Walk", "Run", "Cycle", "Bus", "Drive"],
			criteria: {
				Walk: 0,
				Run: 0,
				Cycle: 0,
				Bus: 5,
				Drive: 10,
			},
		},
		{
			question: "How do you normally go on holiday?",
			options: ["By Plane", "By Car", "By Bus", "By Train"],
			criteria: {
				"By Plane": 20,
				"By Car": 15,
				"By Bus": 5,
				"By Train": 10,
			},
		},
		{
			question: "How often do you buy plastic bags?",
			options: [
				"None - I always bring my own",
				"Minimal - once a month",
				"Occasionally",
				"Quite often",
				"Loads (5+ a week)",
			],
			criteria: {
				"None - I always bring my own": 0,
				"Minimal - once a month": 5,
				Occasionally: 10,
				"Quite often": 15,
				"Loads (5+ a week)": 20,
			},
		},
		{
			question: "Which of these do you recycle?",
			options: [
				"Cardboard boxes",
				"Glass bottles and jars",
				"Paper",
				"Plastic bottles",
				"Tin Cans",
				"None of the above",
			],
			criteria: {
				"Cardboard boxes": 0,
				"Glass bottles and jars": 0,
				Paper: 0,
				"Plastic bottles": 0,
				"Tin Cans": 0,
				"None of the above": 10,
			},
		},
		{
			question: "How many of these do you have/do?",
			options: [
				"Have a wooden toothbrush",
				"Turn off the lights when you leave a room",
				"Turn your TV off, not leaving it on standby",
				"Wear a jumper instead of heating the house",
				"Only boil the water you need",
				"Cold wash your clothes",
				"Grow food",
				"None of the above",
			],
			criteria: {
				"Have a wooden toothbrush": 0,
				"Turn off the lights when you leave a room": 0,
				"Turn your TV off, not leaving it on standby": 0,
				"Wear a jumper instead of heating the house": 0,
				"Only boil the water you need": 0,
				"Cold wash your clothes": 0,
				"Grow food": 0,
				"None of the above": 20,
			},
		},
	];

	const handleAnswerSelection = (questionIndex, answer) => {
		setAnswers({ ...answers, [questionIndex]: answer });
	};

	const calculateTotalPoints = () => {
		const answeredQuestions = Object.keys(answers).length;
		if (answeredQuestions !== questions.length) {
		setErrorMessage("Please answer all questions.");
			return;
		}
	
		let total = 0;
		questions.forEach((question, index) => {
			const selectedAnswer = answers[index];
			if (selectedAnswer) {
				total += question.criteria[selectedAnswer];
			}
		});
		setTotalPoints(total);
		determineResult(total);
		setErrorMessage("");
	};
	
	const determineResult = (points) => {
		if (points < 50) {
			setResultMessage(
				"Hurray!!! You are a Low carbon HERO!!! Keep up the good work and encourage others to do the same!"
			);
		} else if (points >= 50 && points <= 100) {
			setResultMessage("Eco Warrior! Pretty good, you're getting there!");
		} else {
			setResultMessage(
				"Eco Villain! There is an elephant in the room and it is your carbon footprint!!!"
			);
		}
		localStorage.setItem("score", points.toString());
	};

	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="container mx-auto px-40 py-24">
				<div className="flex justify-center">
					<h1 className="text-4xl font-bold mb-6 text-green-600">Quiz</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-2xl font-bold mb-8 text-green-600">
						Are you a UrbaGreen Hero?
					</h1>
					{errorMessage && <p className="text-red-600 font-medium text-lg mb-2">{errorMessage}</p>}
				</div>
					<>
						{questions?.map((question, index) => (
							<div key={index} className="mb-6">
								<h3 className="text-lg font-semibold mb-2">
									{question.question}
								</h3>
								<select
									value={answers[index] || ""}
									onChange={(e) => handleAnswerSelection(index, e.target.value)}
									className="border border-gray-300 rounded p-2 w-full">
									<option value="">Select an answer</option>
									{question.options.map((option, optionIndex) => (
										<option key={optionIndex} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						))}
						<button
							onClick={calculateTotalPoints}
							className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
							Calculate
						</button>
					</>
				{resultMessage && (
					<div className="py-8">
						<h2 className="text-xl font-bold">
							<span className="text-slate-700">
								Results:
							</span>
							<br />
							<span
								className={
									totalPoints <= 50
										? "text-green-600"
										: totalPoints <= 100
										? "text-yellow-600"
										: "text-red-600"
								}
								>
								{resultMessage}
							</span>
							<span className="ml-1 text-green-600 underline underline-offset-2">
								Total Points: {totalPoints}
							</span>
						</h2>
					</div>
				)}
			</div>
		</div>
	);
}

export default Quiz;
