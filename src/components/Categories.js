import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Nav_bar_area from './NavBar';
import { Constant } from '../common/Constants';
import { ContextApiContext } from '../context/ContextApi';
import Language_arr from "../common/Lang";

export default function Categories(props) {
  const navigate = useNavigate();
  const { contextState } = useContext(ContextApiContext);
  const [categories, setCategories] = useState([]);
  const lang = contextState.language.prefix;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let access_token = contextState.user.access_token;
        const headers = {
          Accept: 'application/json',
          Authorization: access_token,
          'Authorization-secure': access_token,
          'client-id': 'reelspro-app-mobile',
        };
        const response = await fetch(Constant.get_category, {
          method: 'GET',
          headers: headers,
        });

        const data = await response.json();
        setCategories(data.response);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const get_string_lable = (str_n) => {
    if (!str_n) {
      return "";
    }

    const str = Language_arr[str_n + lang];
    return str && str.length < 13 ? str : str?.substring(0, 13) + '....';
  };

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

  // Custom function to group categories into rows
  const groupCategoriesIntoRows = (categories, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < categories.length; i += itemsPerRow) {
      rows.push(categories.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const categoriesPerRow = 3; // Change this to set items per row
  const categorizedRows = groupCategoriesIntoRows(categories, categoriesPerRow);

  return (
    <section className="">
      <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid>
        <Row>
          <Col>
            <div className="top_head">
              {get_string_lable("What do you need help with ?")}
            </div>
          </Col>
        </Row>
        {categorizedRows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((category) => (
              <Col key={category.id} className="colCat col-md-4">
                <a
                  className="link_dec"
                  onClick={() => navigateToPath(`/people`, { state: { category_id: category.id } })}
                >
                  <div className="">
                    <img className="img-fluid" src={category.avatar} alt={category.name} />
                    <div className="img_box_txt">
                      <p>{category.name}</p>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  );
}
