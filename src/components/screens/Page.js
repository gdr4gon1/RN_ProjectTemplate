var _ = require('lodash')
//LIB
import React,{Component}  from 'react';
import {
  View,
  InteractionManager
} from 'react-native';


// import { connect } from 'react-redux';
var Spinner = require('react-native-spinkit');
//action

//components
var Define = require('../../Define');
var Debug = require('../../Util/Debug');
var Themes = require('../../Themes');
var Util = require('../../Util/Util');
var Include = require('../../Include');

var {popupActions} = require('../popups/Popup');
var {globalVariableManager}= require('../modules/GlobalVariableManager');



class Page extends Component{

  // static defaultProps = {}
  // static propTypes = {}
  constructor(props){
    super(props);
    this.state={
      loading:true,
    }
  }
  onRefresh(){
    Debug.log(this.constructor.name + ':onRefresh',Debug.level.USER_TRACKER);
  }
  onGetMore(){
    Debug.log(this.constructor.name + ':onGetMore',Debug.level.USER_TRACKER);
  }
  componentWillMount(){
    Debug.log(this.constructor.name + ':componentWillMount',Debug.level.USER_TRACKER);
  }
  componentWillReceiveProps(){
    Debug.log(this.constructor.name + ':componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    let ret = true;
    Debug.log(this.constructor.name + ':shouldComponentUpdate:'+ret);
    return ret;
  }
  componentWillUpdate(){
    Debug.log(this.constructor.name + ':componentWillUpdate',Debug.level.USER_TRACKER);
  }
  render(){
    Debug.log(this.constructor.name + ':render',Debug.level.USER_TRACKER);
    var content = null;
    if (this.state.loading) {
      content=(
        <View
            pointerEvents={'auto'}
            style={[Themes.current.screen.bodyView,this.props.bodyStyle]}>
          <Spinner type={'Wave'} color={Themes.current.factor.spinnerColor} />
        </View>
      ) ;
    }
    else{
      if (_.isFunction(this.renderContent) ) {
        content = this.renderContent();
      }else{
        Debug.log(this.constructor.name+':no renderContent',Debug.level.ERROR)
        content = null;
      }
    }
    return(content)
  }
  componentDidUpdate(){
    Debug.log(this.constructor.name + ':componentDidUpdate');
  }
  componentWillUnmount(){
    Debug.log(this.constructor.name + ':componentWillUnmount',Debug.level.USER_TRACKER);
  }
  componentDidMount(){
    Debug.log(this.constructor.name + ':componentDidMount',Debug.level.USER_TRACKER);
    InteractionManager.runAfterInteractions(() => {
      this.setState({loading:false});
      this.onRefresh();
    });
  }
}


/**
 * [selectActions description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
// function selectActions(state) {
//   return {
//     navigator: state.Navigator,
//   }
// }
//
// module.exports=connect(selectActions, undefined, undefined, {withRef: true})(Screen);

export default Page