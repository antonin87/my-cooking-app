import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RecipeCategory extends Component {

    state = {
        isActive: false
    }

    getComputedStyle = (target, pseudoSelector = null, CSSproperty) => {
        return window.getComputedStyle(target, pseudoSelector).getPropertyValue(CSSproperty);
    }

    toggleClass = (e) => {
            const allFragments = document.querySelectorAll('.menu-item');
            const currentFragment = e.currentTarget;
            allFragments.forEach(element => {
                element.style.backgroundColor = this.getComputedStyle(currentFragment, ':after', 'background-color');
                element.classList.remove('active');
                element.classList.add('inactive');
            });
            currentFragment.classList.remove('inactive');
            currentFragment.classList.toggle('active');
            this.props.toggleTheme(this.getComputedStyle(currentFragment, ':before', 'background-color'));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.theme !== null) {
            const allFragments = document.querySelectorAll('.menu-item');
            allFragments.forEach(element => {
                element.style.backgroundColor = this.getComputedStyle(element, ':after', 'background-color');
                element.classList.remove('active');
                element.classList.remove('inactive');
            }); 
        }
    }

    render() {
        const { category } = this.props;
        
        return(
            <li className={`menu-item menu-${category._id}`} onClick={(e) => this.toggleClass(e)}>
             <Link to={`/category/${category.urlName}`}>
                <div className={'icon'}>
                    {category.title}    
                </div>
            </Link>
            </li>
        )
    }
};

export default RecipeCategory;