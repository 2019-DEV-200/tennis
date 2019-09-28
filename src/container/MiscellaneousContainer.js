import React from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import {page_Title,player_A, player_B } from '../constant/scoreBoard.constant';
import ScoreBoardComponent from '../components/scoreBoardComponent';
import { MainContainer, PlayerA, PlayerB } from './miscellaneous.Styled';

class MiscellaneousContainer extends React.Component{


    constructor(props)
    {
        super(props)
        this.state= {
        PlayerAScore: 0,
        PlayerBScore: 0,
        numberABtnClick : 1,
        numberBBtnClick: 1,
        };
    }

    componentDidMount()
    {       
        document.title =  this.props.intl.formatMessage({id: page_Title});     
    }

    playerBHitsStroke(numberofBHits)
    {
        if(numberofBHits === 1){
            this.setState({PlayerBScore : 15});      } 
           else if(numberofBHits === 2)
           {
             this.setState({PlayerBScore : 30}); 
           }
           else if(numberofBHits === 3)
           {
             this.setState({PlayerBScore : 40}); 
           }
           this.setState({numberBBtnClick : numberofBHits+1 });
    }

    playerAHitsStroke(numberofAHits)
    {
      if(numberofAHits === 1){
       this.setState({PlayerAScore : 15});      } 
      else if(numberofAHits === 2)
      {
        this.setState({PlayerAScore : 30}); 
      }
      else if(numberofAHits === 3)
      {
        this.setState({PlayerAScore : 40}); 
      }
      this.setState({numberABtnClick: numberofAHits+1 });
   
    }

    

    render()
    {
        const {PlayerAScore,PlayerBScore,numberABtnClick,numberBBtnClick}  = this.state;
        console.log("B Score s",this.state.PlayerBScore);
        return(
           <React.Fragment>
               <MainContainer>
               <ScoreBoardComponent PlayerAScore={PlayerAScore} PlayerBScore={PlayerBScore} />
           
               </MainContainer>
         
<PlayerA label={this.props.intl.formatMessage({id: player_A })} className={`redBtn`} onClick={()=> this.playerAHitsStroke(numberABtnClick )}/>
<PlayerB label={this.props.intl.formatMessage({id: player_B })}  className={`redBtn`} onClick={()=> this.playerBHitsStroke(numberBBtnClick )} />

               </React.Fragment>
        );
    }

}

export default (injectIntl(MiscellaneousContainer));
//export default MiscellaneousContainer;