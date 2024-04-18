import { useState } from 'react';
import './App.css';

import SpacerHeight from './Components/Layout/SpacerHeight.jsx';
import SpacerWidth from './Components/Layout/SpacerWidth.jsx';


// O_o => bootstraped
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

// O_o => var
const aryMotorbikes = [
	{brand:'Ducati', 	type: 'Naked', 		model: 'Monster', 			version: 'S4R', 			year: 2003, ps: 113, cc: 996},
	{brand:'KTM', 		type: 'Naked', 		model: 'Super Duke', 		version: '1290 R', 			year: 2014, ps: 177, cc: 1301},
	{brand:'Triumph', 	type: 'Naked', 		model: 'Speed Tripple', 	version: '1200 RS', 		year: 2021, ps: 188, cc: 1160},
	{brand:'Ducati', 	type: 'SuperSport',	model: '998', 				version: 'S Final Edition', year: 2005, ps: 123, cc: 998},
	{brand:'Yamaha', 	type: 'SuperSport',	model: 'YZF',	 			version: 'R1', 				year: 2021, ps: 162, cc: 998},
	{brand:'Honda', 	type: 'SuperSport',	model: 'CBR', 				version: '1000 RR', 		year: 2020, ps: 214, cc: 999},
];


function App() {
	
	// O_o => liste der farben
	const colors = ['red', 'green', 'blue'];
	// const [colors, setColors] = useState(['#red', '#green', '#blue']);

	/* * /
	const alertClicked = (msg) => {
		alert('alertClicked(', msg, ');')
	};
	
	const onClicked = (msg) => {
		alertClicked(msg);

	}
	const onClickCaptured = (msg) => {
		alertClicked(msg);
    };
	/* */

	function alertClicked(msg) { alert('alertClicked(', msg, ');') };
	function onClicked (msg) { alertClicked(msg); }
	function onClickCaptured(msg) { alertClicked(msg); };

	function moveBikes(dirCount) {
		switch (dirCount) {
			case '+':
				let moveListDirLR = false;

				contentShifter(false, 1);
				break;
				
			case '-':
				contentShifter(true, 1)
			break;
			
			case '+1':
				contentShifter(false, -1)
				break;
				
			case '-1':
				contentShifter(true, -1)
			break;
		
			default:
				alert('O_o => moveBikes() had invalid input params!')
				break;
		}
	}
	function contentShifter(moveListDirLR, moveListCount){
		if (moveListDirLR) {
			if (moveListCount >= 0) {

			} else {
				// O_o => move all items
				
			}
		} else {
			
			if (moveListCount >= 0) {
				
			} else {
				// O_o => move all items
				
			}
		}

	}

	return (
		<div className="App">
			<div className='Stage'>
				<div className='StgWrapper'>
					{/* ===> ==> => Title */}

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
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h2><span className='ClrGreen'>Aufgabe 1.2</span></h2><br />
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM die Liste mit der map()-Funktion erstellt.</span>
									<span className='ClrRed'>unkontrolliert ohne key auf den Listen-Einträgen erstellt.</span>
							</h3>
						</div>
					</div>

					<div className='DivWrapper DivFlexFlowRow'>
						<ul>
							{colors.map(color => <li>{color}</li>)}
						</ul>
					</div>
					

					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h2><span className='ClrGreen'>Aufgabe 1.2</span></h2><br />
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM die Liste mit der map()-Funktion erstellt.</span>
									<span className='ClrGreen'>kontrolliert mit key auf den Listen-Einträgen erstellt.</span>
							</h3>
						</div>
					</div>

					<div className='DivWrapper DivFlexFlowRow'>
						<ul>
							{colors.map((color, idx) => <li id={'color-'+idx}>{color}</li>)}
						</ul>
					</div>
					

					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h2><span className='ClrGreen'>Aufgabe 1.3</span></h2><br />
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM erstellt mit Bootstrap ListGroup.Item.</span>
							</h3>
						</div>
					</div>

					<div className='DivWrapper DivFlexFlowRow'>
						<ListGroup defaultActiveKey="#green">

							<ListGroup.Item action href="#green" 
								onClick={() => onClicked('o_O => onClick(#green)')} 
								onClickCapture={() => onClickCaptured('o_O => onClockCaptured("#green")')}
								>
								#green
							</ListGroup.Item><br />

							<ListGroup.Item action href="#red" 
								onClick={() => onClicked('o_O => onClick(#red)')} 
								onClickCapture={() => onClickCaptured('o_O => onClockCaptured(#red)')}
								>
								#red
							</ListGroup.Item><br />

							<ListGroup.Item action href="#blue"
								onClick={() => onClicked('o_O => onClick(#blue)')} 
								onClickCapture={() => onClickCaptured('o_O => onClockCaptured(#blue)')}
								>
								#blue
							</ListGroup.Item><br />

						</ListGroup>
					</div>

					<SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h2><span className='ClrGreen'>Aufgabe 1.3</span></h2><br />
							<h3>
								Eine ListGroup mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM die Liste mit Bootstrap ListGroup und der map()-Funktion erstellt.</span>
									<span className='ClrYellow'>kontrolliert mit key auf den Listen-Einträgen erstellt.</span>
							</h3>
						</div>
					</div>
					
					<div className='DivWrapper DivFlexFlowRow'>
						<ListGroup defaultActiveKey="#green">

							{/* {colors.map((color, idx) => <li id={'color-'+idx} > {color} </li> )} */}
							{colors.map((color, idx) => <><ListGroup.Item action href={color} id={'color-'+idx} > {color} </ListGroup.Item><br /> </>)}

						</ListGroup>
					</div>

					{/* <SpacerHeight isVisible={true} isVisibleStrong={false} isDoubleSingle={false} isFullFitWidth={true} />
					<div className='DivWrapper ClrGrey'>
						<div className='DivSubTitle'>
							<h2><span className='ClrGreen'>Aufgabe 1.4</span></h2><br />
							<h3>
								Eine Liste mit den Farben (red, green und blue) soll in einer Anwendung angezeigt werden.
								<span className='ClrGreen'>Liste von den Farben erstellen.<br />
									Dierekt im HTML DOM durch die Liste mit der map()-Funktion erstellt.</span>
									<span className='ClrGreen'>kontrolliert mit key auf den Listen-Einträgen erstellt.</span>
							</h3>
						</div>
					</div>
					
					<div className='DivWrapper DivFlexFlowRow'>
						<ListGroup defaultActiveKey="#green">

							<ListGroup.Item action href="#green" >#green</ListGroup.Item><br />
							<ListGroup.Item action href="#red" >#red</ListGroup.Item><br />
							<ListGroup.Item action href="#blue" >#blue</ListGroup.Item><br />

						</ListGroup>
						<Button class='w-fit h-fit' onClick={moveBikes('+')}>{'===>==>=>'}</Button><br />
						<Button class='w-fit h-fit' onClick={moveBikes('-')}>{'<=<==<==='}</Button><br />
						<Button class='w-fit h-fit' onClick={moveBikes('+1')}>{'=>'}</Button><br />
						<Button class='w-fit h-fit' onClick={moveBikes('-1')}>{'<='}</Button><br />
					</div> */}

					{/*  */}{/*  */}{/*  */}
				</div>
			</div>
		</div>
	);
}

export default App;
