import React, { Component } from 'react';
import './App.css';
import $ from "jquery";
import HtmlContainer from './components/htmlContainer'
import CssContainer from './components/cssContainer'
import { Link } from 'react-router-dom'
import KnockupRender from './components/knockupRender'
import Helper from './components/helper'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      helper: true,
      orderUrl: '',
      orderNumber: '',
      title: '...',
      image: require('./images/cocktail.png'),
      fullscreen: false,
      methods: ['Select your glass','...','...'],
      ingredients: ['...','...','...'],
      copyright: 'hello',
        containersCss: {
          marginBottom: {property: 'marginBottom', value: '  ', positionDependent: true, propertyName: 'margin-bottom'},
        },
        headersCss: {
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent:false, propertyName: 'font-size'},
        },
        containerCss: {
          backgroundColor: {property: 'backgroundColor', value: 'white', positionDependent:false, propertyName: 'background-color'},
        },
        listItemCss: {
          color: {property: 'color', value: '', positionDependent:false, propertyName: 'color'},
          marginTop: {property: 'marginTop', value: '', positionDependent: false, propertyName: 'margin-top'},
          fontSize: {property: 'fontSize', value: '', positionDependent: false, propertyName: 'font-size'},
          fontFamily: {property: 'fontFamily', value: '', positionDependent:false, propertyName: 'font-family'},
        },
        imageCss:{
          width: {property: 'width', value: '', positionDependent: false, propertyName: 'width'},
          height: {property: 'height', value: '', positionDependent: false, propertyName: 'height'},
          position: {property: 'position', value: '', positionDependent: false, propertyName: 'position'},
          top: {property: 'top', value: '', positionDependent: true, propertyName: 'top'},
          left: {property: 'left', value: '', positionDependent: true, propertyName: 'left'},
          bottom: {property: 'bottom', value: '', positionDependent: true, propertyName: 'bottom'},
          right: {property: 'right', value: '', positionDependent: true, propertyName: 'right'},
        },
        titleCss:{
          fontFamily: {property: 'fontFamily', value: '', positionDependent: false, propertyName: 'font-family'},
          color: {property: 'color', value: '', positionDependent: false, propertyName: 'color'},
          fontSize: {property: 'fontSize', value: '', positionDependent: false, propertyName: 'font-size'},
          position: {property: 'position', value: '', positionDependent: false, propertyName: 'position'},
          top: {property: 'top', value: '', positionDependent: true, propertyName: 'top'},
          left: {property: 'left', value: '', positionDependent: true, propertyName: 'left'},
          bottom: {property: 'bottom', value: '', positionDependent: true, propertyName: 'bottom'},
          right: {property: 'right', value: '', positionDependent: true, propertyName: 'right'},

        },
        methodsCss: {
          width: {property: 'width', value: '', positionDependent: false, propertyName: 'width'},
          position: {property: 'position', value: '', positionDependent: false, propertyName: 'position'},
          top: {property: 'top', value: '', positionDependent: true, propertyName: 'top'},
          left: {property: 'left', value: '', positionDependent: true, propertyName: 'left'},
          bottom: {property: 'bottom', value: '', positionDependent: true, propertyName: 'bottom'},
          right:{property: 'right', value: '', positionDependent: true, propertyName: 'right'},
        },
        ingredientsCss:{
          width: {property: 'width', value: '', positionDependent: false, propertyName: 'width'},
          position: {property: 'position', value: '', positionDependent: false, propertyName: 'position'},
          top: {property: 'top', value: '', positionDependent: true, propertyName: 'top'},
          left: {property: 'left', value: '', positionDependent: true, propertyName: 'left'},
          bottom: {property: 'bottom', value: '', positionDependent: true, propertyName: 'bottom'},
          right: {property: 'right', value: '', positionDependent: true, propertyName: 'right'},
          
        },
        methodCss:{
          listStyleType: {property: 'listStyleType', value: 'bullet', positionDependent: false, propertyName: 'list-style-type'},
        },
        ingredientCss:{
          listStyleType: {property: 'listStyleType', value: 'bullet', positionDependent: false, propertyName:  'list-style-type'},
        }

    }
  }

  componentWillMount(){

    
    switch(this.props.match.params.title){

      case 'Mojito':
      this.setState({
                      image: 'http://www.pngmart.com/files/4/Mojito-Transparent-Background.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, '...', '...'],
                      ingredientsComment: 'A standard Mojito usually contains Bacardi Carta Blanco, fresh lime, mint leaves, brown sugar, soda water'
                    })
      break

      case 'Pina Colada':
      this.setState({
                      image: 'http://cookdiary.net/wp-content/uploads/images/Pina-Colada_6552.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, '...', '...'],
                      ingredientsComment: 'A standard Pina Colada usually contains Fresh pineapple chunks, pineapple Juice, caster sugar, coconut cream, Bacardi Carta Blanco'
                    })
      break

      case 'Cosmopolitan':
      this.setState({
                      image: 'http://www.uvvodka.com/wp-content/uploads/2013/01/recipelarge_crancosmo.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, '...', '...'],
                      ingredientsComment: 'A standard Cosmopolitan usually contains orange vodka, Cointreau liqueur, cranberry juice, lime juice'
                    })
      break 

      case 'Margarita':
      this.setState({
                      image: 'https://img.clipartfest.com/dd80746a4d7a366cf720b7fea6fcb6c6_margarita-clipart-margarita-clip-art-images-clipartallcom-margarita-clipart-transparent_652-1097.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, '...', '...'],
                      ingredientsComment: 'A standard Margarita usually contains tequila, triple sec liqueur, lime juice, 1 lime wedge, salt'
                    })
      break 

      case 'Blackberry Mint Spritzer':
      this.setState({
                      image: 'https://cdn.monin.com/m/media/catalog/product/cache/1/small_image/400x/1b6ac95abd88a964e3097b207dd0be58/B/l/Blackberry_Green_Tea-20170331083336.png',
                      title: this.props.match.params.title, 
                      ingredients: [this.props.match.params.firstIngredient, '...', '...'],
                      ingredientsComment: 'A standard Blackberry Mint Spritzer usually contains blackberries, mint leaves, lime Juice, simple syrup, soda water'
                    })
      break 

    }

  }

  componentDidMount(){
    window.onbeforeunload = function() { return "Your work will be lost." };
  }

  changeCss(item, property, value){
    this.setState({helper: false})
    if (property !== 'fontFamily'){
    value = value.replace(/\s+/g, '');
    }
    value = value.replace(";", "");
    var stateCopy = this.state[item]
    stateCopy[property].value = value + ';';
    this.setState({[item]: stateCopy})
    var element = $('.' + item)
    $(element).css({[property]: value})
    console.log('setting .' + item + ' ' + property + ' to ' + value)
  }

  updateState(item, payload, key){
    this.setState({helper: false})
    switch(item){
      case 'title':
        this.setState({title: payload})
      break;
      case 'ingredients':
        var ingredients = this.state.ingredients;
        ingredients[key] = payload;
        this.setState({ingredients})
      break;
      case 'methods':
       var methods = this.state.methods;
        methods[key] = payload;
        this.setState({methods})
        break;
      case 'image': 
       this.setState({image: payload})
       break;
      case 'copyright':
      this.setState({copyright: payload}, () => {
        console.log(this.state.copyright)
      })
      break;
       default:
       return
    }
  }

  

  removeItem(item, index){
    console.log(this)
    switch(item){
      case 'methods':
      var methods = this.state.methods;
      methods.splice(index, 1);
      this.setState({methods})
      break;

      case 'ingredients':
      var ingredients = this.state.ingredients;
      ingredients.splice(index, 1);
      this.setState({ingredients})
      break;

      default:
      return
    }
  }

  addItem(item){
    switch(item){
      case 'methods':
      var methods = this.state.methods;
      methods.push('...')
      this.setState({methods})
      break;
      case 'ingredients':
      var ingredients = this.state.ingredients;
      ingredients.push('...')
      this.setState({ingredients})
      break;

      default:
      return
    }
  }

  switchTab(tab){
    switch(tab){
      case 'html':
      $('#htmlTab').removeClass('inactiveTab').addClass('activeTab')
      $('#cssTab').removeClass('activeTab').addClass('inactiveTab')
      $('#cssContainer').css({'display':'none'})
      $('#htmlContainer').css({'display':'block'})
      break;
      case 'css':
      $('#htmlTab').removeClass('activeTab').addClass('inactiveTab')
      $('#cssTab').removeClass('inactiveTab').addClass('activeTab')
      $('#cssContainer').css({'display':'block'})
      $('#htmlContainer').css({'display':'none'})
      break;
    }    
  }

  submit(){

    var orderNumber = this.state.title.toLowerCase() + Math.round(Math.random() *10000)
    orderNumber = orderNumber.replace(/\s+/g, '');
    var self = this;
    this.setState({orderNumber})
    var data = {
      image: this.state.image,
      title: this.state.title,
      methods: this.state.methods,
      ingredients: this.state.ingredients,
      copyright: this.state.copyright,
      css: {
        listItem: this.state.listItemCss,
        container: this.state.containerCss,
        image: this.state.imageCss,
        title: this.state.titleCss,
        containers: this.state.containersCss,
        methods: this.state.methodsCss,
        method: this.state.methodCss,
        ingredients: this.state.ingredientsCss,
        ingredient: this.state.ingredientCss,
        headers: this.state.headersCss
      }
    }
    this.props.FirebaseApp.database().ref('/').update({
        [orderNumber]: data
    })
    console.log(data)
    var url = '/order-confirmation/' + orderNumber
    this.props.history.replace(url,'localhost:3000/')
    
  }

  fullscreen(){
    if (!this.state.fullscreen){
      $('#rightContainer').css({'display': 'none'})
      $('#leftContainer').animate({'width': '100%'})
      this.setState({fullscreen: true})
    } else {

       var timeout = setTimeout(function(){
        $('#rightContainer').css({'display': 'inline-block'})
        clearTimeout(timeout)
       },400)
      $('#leftContainer').animate({'width': '50%'})
      this.setState({fullscreen: false})
    }

  }


  render() {
      return (
        <div className="App">
          <div className="sectionContainer" id="leftContainer">
            <div id="leftNav">
              <img src={require('./images/logoWhite.png')} className="editorLogo" />
              <img src={require('./images/mofoWhite.png')} className="mofoEditorLogo" />
              <div className="editorTab activeTab" onClick={this.switchTab.bind(this,'html')}id="htmlTab"><h5>index.html</h5></div>
              <div className="editorTab inactiveTab" onClick={this.switchTab.bind(this,'css')}id="cssTab"><h5>app.css</h5></div>
              <div className="editorTab" onClick={this.submit.bind(this)}id="submitButton"><h5>SUBMIT ORDER</h5></div>
              <img src={require('./images/fullscreen.png')} onClick={this.fullscreen.bind(this)} className="fullscreen" />
            </div>
            <div id="textEditor">
              <div  className="codeContainer" id="htmlContainer">
                <HtmlContainer addItem={this.addItem.bind(this)} removeItem={this.removeItem.bind(this)}updateState={this.updateState.bind(this)}ingredients={this.state.ingredients} footer="boobyy"methods={this.state.methods} {...this.state}/>
              </div>
               <div  className="codeContainer" id="cssContainer">
                <CssContainer 
                  listItemCss={this.state.listItemCss}
                  headersCss={this.state.headersCss}
                  changeCss={this.changeCss.bind(this)}
                  containersCss={this.state.containersCss}
                  containerCss={this.state.containerCss}
                  headersCss={this.state.headersCss}
                  imageCss={this.state.imageCss}
                  titleCss={this.state.titleCss}
                  methodsCss={this.state.methodsCss}
                  ingredientsCss={this.state.ingredientsCss}
                  methodCss={this.state.methodCss}
                  ingredientCss={this.state.ingredientCss} />
              </div>
            </div>
          </div>
          <div className="sectionContainer" id="rightContainer">
          {(this.state.helper) ? <Helper /> : null }
            <KnockupRender {...this.state} />
          </div>
        </div>
      );

     

    
  }
}

export default App;
