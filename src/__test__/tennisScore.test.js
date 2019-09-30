import React from 'react';
import renderer from 'react-test-renderer';
import {
	scorePoints,
	playerA_InitialScore,
	playerB_InitialScore,
	playerB_FirstPoint,
	playerA_ThirdPoint,
	playerB_ThirdPoint
} from '../constant/scoreBoard.constant';
import MiscellaneousContainer from '../container/MiscellaneousContainer';

// This test case will show valid score points
describe('Tennis score board points test case', () => {
	it('Should contain valid score points e.g 30', () => {
		expect(scorePoints).toContain(30);
	});
	it('Should not contain valid score points e.g 3', () => {
		expect(scorePoints).not.toContain(3);
	});
});

// Initial Score of both players same
describe('Initial score of both players test case', () => {
	it('Should have initial score to 0', () => {
		expect(playerA_InitialScore).toEqual(playerB_InitialScore);
	});
});

// Initial Score of both players is same
// if you change initial values then this test case will fail
describe('Initial Score is not same for both the players', () => {
	it('Initial score is not same for both the players', () => {
		expect(playerA_InitialScore).not.toEqual(playerB_FirstPoint);
	});
});

// if score of both players is three points then it will be deuce
describe('Both players score i.e 30', () => {
	it('Should show deuce when both players have 40 score points', () => {
		expect(playerA_ThirdPoint).toEqual(playerB_ThirdPoint);
	});
});

// Not Deuce condition
describe('Both players score three points test case', () => {
	it('Should show deuce when both players have 40 score points', () => {
		expect(playerA_ThirdPoint).not.toEqual(playerA_InitialScore);
	});
});

// snapshot test case for miscellaneous container
it('Should render miscellaneous container', () => {
	const tree = renderer.create(<MiscellaneousContainer />).toJSON();
	expect(tree).toMatchSnapshot();
});
