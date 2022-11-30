import React, { Component } from "react";
import ReviewService from "../services/review.services";

export default class AddReview extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeReview = this.onChangeReview.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeRatingReasoning = this.onChangeRatingReasoning.bind(this);
    this.onChangePlatform = this.onChangePlatform.bind(this);
    this.onChangeImageLink = this.onChangeImageLink.bind(this);
    this.saveReview = this.saveReview.bind(this);

    this.state = {
      title: "",
      review: "",
      rating: "",
      ratingReasoning: "",
      platform: "",
      image: "",
      saved: "",
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeReview(e) {
    this.setState({
      review: e.target.value,
    });
  }
  onChangeRating(e) {
    this.setState({
      rating: e.target.value,
    });
  }
  onChangeRatingReasoning(e) {
    this.setState({
      ratingReasoning: e.target.value,
    });
  }
  onChangePlatform(e) {
    this.setState({
      platform: e.target.value,
    });
  }
  onChangeImageLink(e) {
    this.setState({
      image: e.target.value,
    });
  }

  saveReview() {
    var data = {
      idUser: 11,
      review: this.state.review,
      title: this.state.title,
      rating: this.state.rating,
      ratingReasoning: this.state.ratingReasoning,
      platform: this.state.platform,
      image: this.state.image,
    };

    ReviewService.create(data)
      .then((res) => {
        this.setState({
          idUser: 11,
          review: res.data.review,
          title: res.data.title,
          rating: res.data.rating,
          ratingReasoning: res.data.ratingReasoning,
          platform: res.data.platform,
          image: res.data.image,
        });
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="submit-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={this.state.title}
            onChange={this.onChangeTitle}
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <input
            type="text"
            className="form-control"
            id="review"
            required
            value={this.state.review}
            onChange={this.onChangeReview}
            name="review"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            required
            value={this.state.rating}
            onChange={this.onChangeRating}
            name="rating"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ratingReasoning">Rating</label>
          <input
            type="text"
            className="form-control"
            id="ratingReasoning"
            required
            value={this.state.ratingReasoning}
            onChange={this.onChangeRatingReasoning}
            name="ratingReasoning"
          />
        </div>
        <div className="form-group">
          <label htmlFor="platform">Platform</label>
          <input
            type="text"
            className="form-control"
            id="platform"
            required
            value={this.state.platform}
            onChange={this.onChangePlatform}
            name="platform"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Reasoning for rating</label>
          <input
            type="text"
            className="form-control"
            id="image"
            required
            value={this.state.image}
            onChange={this.onChangeImageLink}
            name="image"
          />
        </div>{" "}
        <button onClick={this.saveReview} className="btn btn-success">
          Submit
        </button>
      </div>
    );
  }
}
