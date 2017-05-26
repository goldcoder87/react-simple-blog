import React, { Component } from 'react';
import TitleField from '../components/TitleField';
import BodyField from '../components/BodyField';

class ArticleFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleTitle: '',
      articleBody: ''
    };
          this.handleAddNewArticle = this.handleAddNewArticle.bind(this);
          this.handleTitleChange = this.handleTitleChange.bind(this);
          this.handleBodyChange = this.handleBodyChange.bind(this);
          this.handleClearCLick = this.handleClearCLick.bind(this);
  }

  handleTitleChange(event){
    this.setState({articleTitle: event.target.value});
  }

  handleBodyChange(event){
    this.setState({articleBody: event.target.value});
  }

  handleClearCLick(event){
    event.preventDefault();
    this.setState({articleTitle: '', articleBody: ''});
  }

    handleAddNewArticle(event){
      event.preventDefault();
        let formPayload = {
          title: this.state.articleTitle,
          id: '',
          body: this.state.articleBody
        };
        this.props.addNewArticle(formPayload);
        this.setState({articleTitle: '', articleBody: ''});
}

  render() {
    return(
      <form className="new-article-form callout" onSubmit={this.handleAddNewArticle}>
        <TitleField
          content={this.state.articleTitle}
          label="Article Title"
          name="article-title"
          handleTitleChange = {this.handleTitleChange}
        />
        <BodyField
          content={this.state.articleBody}
          label="Article Body"
          name="article-body"
          handleBodyChange = {this.handleBodyChange}
        />

        <div className="button-group">
          <button className="button" onClick = {this.handleClearCLick}>Clear</button>
          <input className="button" type="submit" value="Submit" onClick = {this.handleAddNewArticle} />
        </div>
      </form>
    )
  }
}

export default ArticleFormContainer;
