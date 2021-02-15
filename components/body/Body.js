import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { BodyStyled, BodyContent, InputField, ButtonSearch, FooterBody } from './BodyStyle';
import { getAllStarships } from '../../services/starships';
import Starship from '../cards/Starship';

export default function Body() {
  const [offset, setOffset] = useState(1);
  const [starships, setStarships] = useState([]);

  async function getAllStarshipsPerPage(){
    const { results } =  await getAllStarships(offset);
    setStarships(results);
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  useEffect(() => {
    getAllStarshipsPerPage()
  }, [offset])


  return (
    <BodyStyled>
      <BodyContent>
        <div className="input-distance">
          <InputField
            placeholder="Insert a distance (MGLT)"/>
          <ButtonSearch>Search</ButtonSearch>
        </div>
        <div className="spaceship-content">
          {starships.map((starship) => (
            <Starship starship={starship}></Starship>
          ))}
        </div>
      </BodyContent>
      <FooterBody>
        <ReactPaginate
          previousLabel={"<"}
          initialPage={1}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </FooterBody>
    </BodyStyled>
  );
}
