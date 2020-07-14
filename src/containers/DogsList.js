import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FETCHDOGS, FILTERDOGLIST } from '../actions';
import Dog from '../components/Dog';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/scss/BooksList.scss';

// const filteredBooks = (dogs, filter) => {
//   if (filter === 'All') {
//     return dogs;
//   }
//   return dogs.filter(book => book.category === filter);
// };

const DogsList = ({
  dogs, FETCHDOGS, FILTERDOGLIST,
}) => {
  console.log(dogs);
  React.useEffect(() => FETCHDOGS(), []);
  const handleFilterChange = event => {
    const { value } = event.target;
    FILTERDOGLIST(value);
  };

  return dogs.length === 0 ? <p>Is Loading</p> : (
    <div className="book-list">
      <div className="header">
        <div className="header-title">Dog Catalogue</div>
        <div className="category-container">
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
      </div>
      <div className="books-container">
        {dogs.map(dog => (
          <Link key={dog.idMeal} to={{ pathname: `/dog/${dog.idMeal}`, state: dog }}>
            <Dog key={dog.idMeal} dog={dog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

DogsList.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  FETCHDOGS: PropTypes.func.isRequired,
  FILTERDOGLIST: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dogs: state.dogs.dog_clothes,
});

// const mapDispatchToProps = dispatch => ({
//   removeBook: id => dispatch(REMOVE_BOOK(id)),
//   changeFilter: value => dispatch(CHANGE_FILTER(value)),
// });

export default connect(mapStateToProps, { FETCHDOGS, FILTERDOGLIST }, null)(DogsList);
