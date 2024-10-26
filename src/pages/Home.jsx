import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipes } from '../redux/recipeSlice';

const Home = () => {
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const TotalPage = Math.ceil(allRecipes?.length / productPerPage);
  const currentPageLastProductIndex = productPerPage * currentPage;
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage;
  const visibleProductsCards = allRecipes?.slice(currentPageFirstProductIndex, currentPageLastProductIndex);

  const navigateToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const navigateToNextPage = () => {
    if (currentPage < TotalPage) setCurrentPage(currentPage + 1);
  };

  return (
    <>
     <Header searchBar={true}/>
      {loading ? (
        <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
          <div className=" d-flex justify-content-center align-items-center my-5 text-lg">
            <img src="https://loading.io/assets/mod/spinner/default/lg.gif" alt="Loading..." />
          </div>
        </div>
      ) : (
        <>
          <div className ="d-flex justify-content-evenly align-items-center row w-100">
            {allRecipes?.length > 0 ? (
              visibleProductsCards?.map((recipe) => (
                <div className="d-flex col p-4 justify-content-evenly align-items-center" key={recipe.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe?.image} />
                    <Card.Body className="ms-auto me-auto">
                      <Card.Title>{recipe?.name}</Card.Title>
                      <h6 style={{marginLeft:'70px'}}>{recipe?.cuisine}</h6>
                      <Link
                        style={{ marginLeft: '70px', textDecoration: 'none' }}
                        className="bg-primary rounded p-1 mt-3 text-white inline-block"
                        to={`/${recipe.id}/view`}
                      >
                        View More
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              <div className=" d-flex justify-content-center  align-items-center text-primary">
                No Products are available!!
              </div>
            )}
          </div>
          <div className=" d-flex text-center text-primary my-5">
            <span onClick={navigateToPreviousPage} className="cursor-pointer">
              <i className="fa-solid fa-backward me-5"></i>
            </span>
            <span className="text-2xl font-bold">{currentPage} of {TotalPage}</span>
            <span onClick={navigateToNextPage} className="cursor-pointer">
              <i className="fa-solid fa-forward ms-5"></i>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
