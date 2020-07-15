/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/ShowDog.scss';
import { connect } from 'react-redux';
import { FETCHDOG, CLEAR_DATA } from '../actions/index';

function ShowDog({
  location, FETCHDOG, CLEAR_DATA, dog,
}) {
  useEffect(() => {
    FETCHDOG(location.state.idMeal);
    return CLEAR_DATA();
  }, []);

  return Object.entries(dog).length === 0 ? <p>Loading</p> : (
    <div className="dog">
      <div className="show-item">
        <img src={dog.strMealThumb} alt="" />
        <p>{dog.strMeal}</p>
      </div>
      <div className="info">
        <h2 className="title">
          Ingredients Used
        </h2>
        <ul className="ingredients">
          <li className="item">{dog.strIngredient1}</li>
          <li className="item">{dog.strIngredient2}</li>
          <li className="item">{dog.strIngredient3}</li>
          <li className="item">{dog.strIngredient4}</li>
          <li className="item">{dog.strIngredient5}</li>
          <li className="item">{dog.strIngredient6}</li>
          <li className="item">{dog.strIngredient7}</li>
          <li className="item">{dog.strIngredient8}</li>
        </ul>
        <h2 className="instructions">Instructions</h2>
        <p className="instruction">{dog.strInstructions}</p>
      </div>
    </div>
  );
}

ShowDog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dog: PropTypes.object.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  FETCHDOG: PropTypes.func.isRequired,
  CLEAR_DATA: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dog: state.dogs.singleDog,
});

export default connect(mapStateToProps, { FETCHDOG, CLEAR_DATA })(ShowDog);
