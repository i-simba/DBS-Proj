import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import { Center, Container, ExpandingChild, ExpandingMenu, Left, Logo, Menu, MenuChild, MenuSelection, MenuTitle, NavLabel, Right, Wrapper } from "../styles/Navbar.styles";

const Navbar = () => {
    /* Expanding Menu - Parent */
    const parentRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        revertChild();
    }

    /* Expanding Menu - Child */
    const childRef = useRef(null);
    const handleTransitionEnd = () => {
        if (isExpanded) {
            childRef.current.style.display = "flex";
        }
    }
    const revertChild = () => {
        childRef.current.style.display = "none";
    }

    

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Logo>
                            <TheatersIcon/>
                            <h4>Movie</h4>
                            <h4>Bite</h4>
                        </Logo>
                    </Link>
                    <Menu onClick={handleToggle}>
                        {isExpanded ? <ClearIcon/> : <MenuIcon/>}
                        <NavLabel>&nbsp;Menu</NavLabel>
                    </Menu>
                </Left>
                <Center>
                    <Menu>TBD Search</Menu>
                </Center>
                <Right>
                    <Menu>
                        <PersonIcon/>
                        <NavLabel>&nbsp;Log In</NavLabel>
                    </Menu>
                </Right>
            </Wrapper>
            <ExpandingMenu ref={parentRef} style={{height: isExpanded ? "20vh" : "0"}} onTransitionEnd={handleTransitionEnd}>
                <ExpandingChild ref={childRef} style={{display: "none"}} onMouseLeave={handleToggle}>
                    <MenuChild>
                        <MenuTitle>Category</MenuTitle>
                            <MenuSelection>Action</MenuSelection>
                            <MenuSelection>Horror</MenuSelection>
                            <MenuSelection>Comedy</MenuSelection>
                            <MenuSelection>Romance</MenuSelection>
                            <MenuSelection>Thriller</MenuSelection>
                            <MenuSelection>Drama</MenuSelection>
                    </MenuChild>
                    <MenuChild>
                        <MenuTitle>People & Studio</MenuTitle>
                            <MenuSelection>Directors</MenuSelection>
                            <MenuSelection>Actors</MenuSelection>
                            <MenuSelection>Studio</MenuSelection>
                    </MenuChild>
                </ExpandingChild>
            </ExpandingMenu>
        </Container>
    );
}

export default Navbar;