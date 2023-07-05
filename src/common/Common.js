// import {translate} from 'google-translate-api';
import Lang from "./Lang";

export function change_time_stamp(start_time) {
    let date = new Date(start_time * 1000);
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = '0' + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = '0' + date.getSeconds();
    // Will display time in 10:30:23 format
    let formattedTime =
      hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log('formattedTime', formattedTime);
    return {
      hours: hours,
      minutes: minutes,
    };
  }
  
  export async function googleTranslate(text,lang,that) {

    if(lang == 'en'){
        return text;
    }
    else{
        // console.log('Lang[lang]',Lang);
        // console.log('lang',lang);
        // console.log('Lang[lang]',Lang[text]);
        // return 'asd' ;
        return Lang[text] ;
    }
    // const {Translate} = require('@google-cloud/translate').v2;

    // Instantiates a client
    // const translate = new Translate({projectId});
    
    // async function quickStart() {
    //   // The text to translate
    //   const text = 'Hello, world!';
    
    //   // The target language
    //   const target = 'ru';
    
    //   // Translates some text into Russian
    //   const [translation] = await translate.translate(text, target);
    //   console.log(`Text: ${text}`);
    //   console.log(`Translation: ${translation}`);


  }
  export async function SendRequest(that, request_type, url, formData) {
    let postData = {
      method: request_type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: that.props.user.access_token,
        'Authorization-secure': that.props.user.access_token,
        'client-id': 'parhwalo-app-android',
      },
    };
  
    if (formData != null) {
      postData.body = formData;
    }
  
    let response = await fetch(url, postData);
    console.log('req ressssssssa11111111',response);
    return response.json();
  }
  