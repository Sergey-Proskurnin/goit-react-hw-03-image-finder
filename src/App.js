import React, { Component } from 'react';
import './App.css';

import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import fetchImages from './services/fetchImages';
import LoaderOn from 'components/Loader';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalImg: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });
    fetchImages
      .fetchImagesWithQuery(searchQuery, 1)
      .then(response => this.setState({ images: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMore = () => {
    const { searchQuery, currentPage } = this.state;

    this.setState({ isLoading: true });
    fetchImages
      .fetchImagesWithQuery(searchQuery, currentPage + 1)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector('#imagesList').scrollHeight,
          behavior: 'smooth',
        });
      });
    console.log(document.querySelector('#imagesList'));
  };
  onOpenModal = e => {
    this.setState({ modalImg: e.target.dataset.source, showModal: true });
  };

  onCloseModal = e => {
    if (e.target.nodeName !== 'IMG') {
      this.setState({ showModal: false, modalImg: '' });
    }
  };

  onSetQuery = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Searchbar
          onSubmit={this.onSubmit}
          onSetQuery={this.onSetQuery}
          searchQuery={this.state.searchQuery}
        />
        <ImageGallery
          onOpenModal={this.onOpenModal}
          images={this.state.images}
        />
        {this.state.isLoading && <LoaderOn />}
        {this.state.images.length !== 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            onCloseModal={this.onCloseModal}
            modalImg={this.state.modalImg}
          />
        )}
      </Container>
    );
  }
}

export default App;
