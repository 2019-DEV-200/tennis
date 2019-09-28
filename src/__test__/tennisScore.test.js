import {scorePoints, 
    playerA_InitialScore, 
    playerB_InitialScore,
    playerA_SecondPoint,
    playerB_SecondPoint,
    playerB_FirstPoint, 
    playerB_FirstPoint, 
    playerA_ThirdPoint,
    playerB_ThirdPoint} from '../constant/scoreBoard.constant';

// This test case will show valid score points
describe ('Tennis score board points',()=>
{
  it('Valid Score Board',()=>{
  expect(scorePoints).toContain(30);
  });
  it('Invalid Score Board',()=>{
    expect(scorePoints).not.toContain(3);
 });
});

// Initial Score of both players same
describe ('Initial score of both players', ()=>
{
it('Initial score for both players will be Love',()=>{
expect(playerA_InitialScore).toEqual(playerB_InitialScore)
});
});

// Initial Score of both players is same
// if you change initial values then this test case will fail
describe ('Initial Score is not same for both the players',()=>{
    it('Initial score is not same for both the players',()=>{
        expect(playerA_InitialScore).not.toEqual(playerB_FirstPoint)
    });    
});

// if score of both players is three points then it will be deuce
describe('Both players score three points',()=> {    
it ('its a deuce situation!! as both players score the same', ()=>{
   expect(playerA_ThirdPoint).toEqual(playerB_ThirdPoint)    
});    
});

// Clean sweep 
describe('Both players score three points',()=> {
    it ('its a deuce situation!! as both players score the same', ()=>{
       expect(playerA_ThirdPoint).toEqual(playerA_InitialScore)    
    });    
    });



