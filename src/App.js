import { useState } from 'react';
import './App.css';

import SpacerHeight from './Components/Layout/SpacerHeight.jsx';
import SpacerWidth from './Components/Layout/SpacerWidth.jsx';

import ListVariant001 from './Components/ListElements/ListVariant001.jsx';



function App() {
	
	// O_o => liste der farben
	// const colors = ['red', 'green', 'blue'];
	const [colors, setColors] = useState(['red', 'green', 'blue']);

	return (
		<div className="App">
			<div className='Stage'>
				<div className='StgWrapper'>
					{/*  */}{/*  */}{/*  */}

					<div className='StgTitle'><h1>
						M293 :: ReactJS
						<span>Listen :: twoListGroup</span>
					</h1>
					</div>

					<SpacerHeight isVisible={false} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={false} />
					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					<SpacerHeight isVisible={true} isVisibleStrong={true} isDoubleSingle={false} isFullFitWidth={true} />

					{/* START CONTENT :: AUFGABE 1*/}

					<div className='DivWrapper'>
						<div className='DivTitle'>
							<h2>Aufgabe 1
								<span>Umsetzung von einzelner Checkbox Situation als RadioButtons</span>
							</h2>
						</div>
					</div>

					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					{/* RadioButtons nebeneinander, im HTML DOM */}
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM durch die Liste mit der map()-Funktion erstellt.</span>
									<span className='ClrRed'>unkontrolliert ohne key auf den Einträgen erstellt.</span>
							</h3>
						</div>
					</div>

					<div className='DivWrapper DivFlexFlowRow'>
						<ul>
							{colors.map(color => <li>{color}</li>)}
						</ul>
					</div>
					

					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					{/* RadioButtons nebeneinander, im HTML DOM */}
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM durch die Liste mit der map()-Funktion erstellt.</span>
									<span className='ClrGreen'>kontrolliert mit key auf den Einträgen erstellt.</span>
							</h3>
						</div>
					</div>

					<div className='DivWrapper DivFlexFlowRow'>
						<ul>
							{colors.map((color, idx) => <li id={'color-'+idx}>{color}</li>)}
						</ul>
					</div>
					{/*  */}{/*  */}{/*  */}
				</div>
			</div>
		</div>
	);
}

export default App;
