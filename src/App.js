import React, { Component } from "react"
import "./App.css"
import Counters from "./components/Counters"
import Navbar from "./components/Navbar"

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 4 },
			{ id: 4, value: 0 },
		],
	}

	// function to handle increment on each counter
	handleIncrement = counter => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index] = { ...counter }
		counters[index].value++
		this.setState({ counters })
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0
			return c
		})
		this.setState({ counters })
	}

	handleDelete = counterId => {
		console.log("Event Handler called", counterId)
		const counters = this.state.counters.filter(c => c.id !== counterId)
		this.setState({ counters })
	}
	render() {
		return (
			<React.Fragment>
				<Navbar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container-fluid">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		)
	}
}

export default App
