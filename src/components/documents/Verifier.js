import React, { Component } from 'react';
import { connect } from 'react-redux';
import {verifyDoc, verifierDocs} from "../../redux/actions/documents";
import accountsConst from '../../constants/accounts';
import menu from "../../constants/menu";
import Loader from "../common/Loader";
import {Redirect} from "react-router-dom";
import { update } from '../../redux/actions/user';
import user from '../../redux/type/user';

@connect((store) => {
  return {
    user: store.user,
    documents: store.documents
  };
})

export default class Verifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // email: '',
      // description: '',
      // type: '',
      // price: '',
      // institute: '',
      // logo: '',
      getStatusLabel: accountsConst.getStatusLabel,
      redirect: false,
      documents: menu.documents,
      url: '',
      isVerifier: props.user.details.type === 0
    };
  }
  componentDidMount() {
    this.props.dispatch(verifierDocs({
      account: this.props.user.details.account,
      total: this.props.user.count.total
    }));
    if (!this.state.isVerifier)
      this.back();
  }

  verifyDoc = (docAddress, status, institute, verifierAddr) => {
    // const f1 = user
    // console.log(f1);
    // if(user.details.account === verifierAddr){
    //   this.setState({name: user.details.name, email: user.details.email, description: user.details.description, type: user.details.type, rate: user.details.price, institute: institute, logo: user.details.logo});
    // }
    // const payload =  {
    //   name: this.state.name,
    //   email: this.state.email,
    //   description: this.state.description,
    //   type: this.state.type,
    //   price: this.state.price,
    //   institute: institute,
    //   logo: this.state.logo,
    //   account: verifierAddr,
    // };
    // console.log(payload)
    // this.props.dispatch(update(payload));

    this.props.dispatch(verifyDoc({
      account: this.props.user.details.account,
      docAddress: docAddress,
      status: status
    }));
    this.back();
  };
  back = () =>{
    this.setState({redirect: true, url: this.state.documents.list});
  };
  render() {
    if(this.props.documents.loading)
      return (<Loader />);
    if(this.state.redirect)
      return (<Redirect to={this.state.url}/>);
    return (
      <div className='container'>
        <div className='row align-center'>
          <div className='col-12'>
            <table className="table table-hover">
              <thead>
              <tr>
                <th className="custom-t">Name</th>
                <th className="custom-t">Description</th>
                <th className="custom-t">Status</th>
                <th> </th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.documents.verifierDocs.map((doc, index)=>{
                  let statusLabel = this.state.getStatusLabel(doc.status).label;
                  return (
                    <tr key={index}>
                      <td>{doc.name}</td>
                      <td>{doc.description}</td>
                      <td className={statusLabel}>{statusLabel}</td>
                      <td align="center">
                        <div className="dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" id="link1" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                            <span className="far fa-cog"> Actions </span>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="link1">
                            <a className='dropdown-item' href={doc.link} target='_blank'> View </a>
                            {doc.status === 0 && (
                              <div>
                                <span className="dropdown-item Rejected pointer" onClick={() => this.verifyDoc(doc.docAddress, 2, doc.name, doc.verifier)}>Reject</span>
                                <span className="dropdown-item Verified pointer" onClick={() => this.verifyDoc(doc.docAddress, 1, doc.name, doc.verifier)}>Verify</span>
                              </div>
                              )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        </div>
        <div className='float-right'>
          <button type="button" className="btn-verify" onClick={this.back}>Back</button>
        </div>
        <div className='clear'> </div>
      </div>
    );
  }

};
