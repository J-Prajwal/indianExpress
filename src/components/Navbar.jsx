import React, { useRef } from "react";
import style from "../Header_CSS/Navbar.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Link,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: Search,
    onOpen: openSearch,
    onClose: CloseSearch,
  } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <div className={style.NavbarMainDiv}>
      <div className={style.MenuIconBtn}>
        <Button
          onClick={onOpen}
          icon={<HamburgerIcon />}
          as={IconButton}
          aria-label="Options"
          bg="none"
          variant="none"
          fontSize="35px"
          color="white"
        ></Button>
        <Modal onClose={onClose} size="full" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody bg="whitesmoke">
              <div className={style.MenuContainer}>
                <div className={style.MenuFirstDiv}>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Home</li>
                    <li className={style.ForBoldLi}>World</li>
                    <li className={style.ForBoldLi}>India</li>
                    <li className={style.ForBoldLi}>North East India</li>
                    <li>Arunachal Pradesh</li>
                    <li>Assam</li>
                    <li>Manipur</li>
                    <li>Meghalaya</li>
                    <li>Mizoram</li>
                    <li>Nagaland</li>
                    <li>Tripura</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Photos</li>
                    <li>Entertainment</li>
                    <li>Sports</li>
                    <li>News</li>
                    <li>Lifestyle</li>
                    <li>Viral</li>
                    <li>Technology</li>
                    <li>Archives</li>
                    <button className={style.NavLinks_btn1}>
                      <Link href="https://www.99acres.com/" isExternal>
                        99acres.com
                      </Link>
                    </button>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Videos</li>
                    <li>Explained</li>
                    <li>Technology</li>
                    <li>Entertainment</li>
                    <li>Lifestyle</li>
                    <li>Food</li>
                    <li>Sports</li>
                    <li>Auto</li>
                    <li>Idea Exchange</li>
                    <li>News</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Audio</li>
                    <li>3 Things</li>
                    <li>Express Sports</li>
                    <li>Water</li>
                    <li>Likh:The Process</li>
                    <li>Metro Food Hoppers</li>
                    <li>The Sandip Roy Show</li>
                    <li>Talking Books</li>
                    <li>What To Watch This Weekend</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>From the print</li>
                    <li>Opinion</li>
                    <li>Explained</li>
                    <li>Delhi Confidential</li>
                    <li>Astrology</li>
                    <li>Epaper</li>
                    <li>Todays Paper</li>
                    <li>Sunday Eye</li>
                  </ul>
                </div>
                <center>
                  <hr />
                </center>
                <div className={style.MenuFirstDiv}>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Entertainment</li>
                    <li>Bollywood</li>
                    <li>Hollywood</li>
                    <li>Television</li>
                    <li>Music</li>
                    <li>Reviews</li>
                    <li>Regional</li>
                    <li>Tamil</li>
                    <li>Telugu</li>
                    <li>Malayalam</li>
                    <li>Box Office</li>
                    <li>Web Series</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Featured</li>
                    <li>What Is</li>
                    <li>Who Is</li>
                    <li>When Is</li>
                    <li>How to</li>
                    <li>Research</li>
                    <li>GenderAnd</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Sports</li>
                    <li>Olympics</li>
                    <li>T20 WC</li>
                    <li>Badminton</li>
                    <li>Cricket</li>
                    <li>Football</li>
                    <li>FIFA 2018</li>
                    <li>Hockey</li>
                    <li>Motor Sport</li>
                    <li>Tennis</li>
                    <li>WWE Wrestling</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Tech</li>
                    <li>Technology</li>
                    <li>Mobile & Tabs</li>
                    <li>Gadgets</li>
                    <li>Science</li>
                    <li>Tech Reviews</li>
                    <li>Social</li>
                    <li>Tech News</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Lifestyle</li>
                    <li>Books</li>
                    <li>Fashion</li>
                    <li>Food Wine</li>
                    <li>Health</li>
                    <li>Fitness</li>
                    <li>Art & Culture</li>
                    <li>Workplace</li>
                    <li>Auto & Travel</li>
                  </ul>
                </div>
                <center>
                  <hr />
                </center>
                <div className={style.MenuFirstDiv}>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Trending</li>
                    <li>Trending In India</li>
                    <li>Trending Globally</li>
                    <li>Viral Videos</li>
                    <li>Bizarre</li>
                    <li>Voice</li>
                    <li className={style.ForBoldLi}>Parenting</li>
                    <li>Food</li>
                    <li>Health & Fitness</li>
                    <li>Learning</li>
                    <li>Family</li>
                    <li>Blogs</li>
                    <li>Things to do</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Cities News</li>
                    <li>Ahmedabad</li>
                    <li>Bangalore</li>
                    <li>Chandigarh</li>
                    <li>Chennai</li>
                    <li>Delhi</li>
                    <li>Jaipur</li>
                    <li>Kolkata</li>
                    <li>Lukhnow</li>
                    <li>Ludhiana</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Jobs</li>
                    <li>Bank Jobs</li>
                    <li>Defence Jobs</li>
                    <li>PSU</li>
                    <li>Railway</li>
                    <li>UPSC</li>
                    <li>Teachers Job</li>
                    <li>SSC</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Business</li>
                    <li>Aviation</li>
                    <li>Banking & Finance</li>
                    <li>Budget</li>
                    <li>Business Other</li>
                    <li>Companies</li>
                    <li>Economy</li>
                    <li>Market</li>
                  </ul>
                  <ul className={style.ForAllUls}>
                    <li className={style.ForBoldLi}>Education</li>
                    <li>Students Voice</li>
                    <li>Study Abroad</li>
                    <li className={style.ForBoldLi}>More</li>
                    <li>Elections</li>
                    <li>Brands Solution</li>
                  </ul>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
      <div className={style.NavLinks}>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Home</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Explained</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Political Pulse</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>India</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Cities</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Opinion</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Entertainment</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Education</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Premium</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Sports</h3>
        </Link>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Audio</h3>
        </Link>

        <button className={style.NavLinks_btn1}>
          <Link href="https://www.99acres.com/" isExternal>
            99acres.com
          </Link>
        </button>
        <button className={style.NavLinks_btn2}>Subscribe</button>
        <Link href="https://www.99acres.com/" isExternal>
          <h3>Sign in</h3>
        </Link>
      </div>
      <div className={style.SearchIcondiv}>
        <Button onClick={openSearch} colorScheme="white">
          <SearchIcon w={5} h={5} />
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={Search}
          onClose={CloseSearch}
        >
          <ModalOverlay />
          <ModalContent top="28%">
            <ModalCloseButton />
            <ModalBody pb={6}>
              <div className={style.searchModal}>
                <Input
                  ref={initialRef}
                  placeholder="Search..."
                  focusBorderColor="black"
                  borderRadius="none"
                />
                <Button bg="black" colorScheme="white" borderRadius="none">
                  SEARCH
                </Button>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
