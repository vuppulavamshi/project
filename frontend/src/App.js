import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/navigation.css'
import Approver from './components/approver';
import Major from './components/major';
import TransferCourse from './components/transfer_course';
import Home from './components/home';
import Navigation from './components/navigation';
import Error from './components/error';
import School from './components/school';
import MajorRequirememnt from './components/major_requirement';
import TransferEvaluation from './components/transfer_evaluation';
import ImportFile from './components/import_file';
import RemoveData from './components/remove-data';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/approver" component={Approver}/>
             <Route path="/major" component={Major}/>
             <Route path="/school" component={School}/>
             <Route path="/transfer-course" component={TransferCourse}/>
             <Route path="/major-req" component={MajorRequirememnt} />
             <Route path="/import" component={ImportFile} />
             <Route path="/remove" component={RemoveData} />
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

// <Route path="/transfer-eval" component={TransferEvaluation} />
