import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuQuery, CustomerQuery, CartQuery, SignOutMutation } from '@deity/falcon-shop-data';
import { T } from '@deity/falcon-i18n';
import { Link, ListItem, Icon, Box, Button } from "@deity/falcon-ui";
import { RouterLink, MenuNavbar, HeaderBanner, CartIcon, HeaderBarLayout, HeaderBarArea } from '@deity/falcon-ui-kit';
import { OpenSidebarMutation, SIDEBAR_TYPE } from 'src/components';

const TestStyles = {
  px: {
    xs: "sm",
    md: "xxl"
  },
  m: "xxl",
  display: {
    xs: "none",
    md: "block"
  }
};
export const Header = withRouter(({ history }) => (
         <CustomerQuery>
           {({ data: { customer } }) => (
             <header>
               <HeaderBanner>
                 {customer && (
                   <ListItem>
                     <SignOutMutation>
                       {signOut => (
                         <Link
                           onClick={() =>
                             signOut().then(() => history.push("/"))
                           }
                         >
                           <T id="signOut.link" />
                         </Link>
                       )}
                     </SignOutMutation>
                   </ListItem>
                 )}
                 <ListItem>
                   <RouterLink to="#">
                     <T id="banner.contactLink" />
                   </RouterLink>
                 </ListItem>
                 <ListItem>
                   <RouterLink to="/blog">
                     <T id="banner.blogLink" />
                   </RouterLink>
                 </ListItem>
               </HeaderBanner>
               <OpenSidebarMutation>
                 {openSidebar => (
                   <HeaderBarLayout>
                     <Link
                       gridArea={HeaderBarArea.signIn}
                       onClick={() =>
                         openSidebar({
                           variables: {
                             contentType: SIDEBAR_TYPE.account,
                             side: "left"
                           }
                         })
                       }
                     >
                       <Icon src="signIn" />
                     </Link>
                     <RouterLink
                       gridArea={HeaderBarArea.logo}
                       to="/"
                       aria-label="DEITY"
                     >
                       <Icon src="logo" height="logoHeight" width="logoWidth" />
                     </RouterLink>
                     {customer ? (
                       <RouterLink
                         gridArea={HeaderBarArea.signIn}
                         to="/account"
                       >
                         <Icon src="account" />
                       </RouterLink>
                     ) : (
                       <Link
                         gridArea={HeaderBarArea.signIn}
                         onClick={() =>
                           openSidebar({
                             variables: { contentType: SIDEBAR_TYPE.account }
                           })
                         }
                       >
                         <Icon src="signIn" />
                       </Link>
                     )}
                     <Link
                       gridArea={HeaderBarArea.cart}
                       onClick={() =>
                         openSidebar({
                           variables: { contentType: SIDEBAR_TYPE.cart }
                         })
                       }
                     >
                       <CartQuery>
                         {({ data: { cart } }) => (
                           <CartIcon itemsQty={cart && cart.itemsQty} />
                         )}
                       </CartQuery>
                     </Link>
                   </HeaderBarLayout>
                 )}
               </OpenSidebarMutation>
               {/* <Box tag="div" {...TestStyles}>
                 <MenuQuery>
                   {({ data: { menu } }) => <MenuNavbar items={menu} />}
                 </MenuQuery>
               </Box> */}

               <Button {...TestStyles}>test</Button>
               <Button px={{ xs: "sm", md: "xxl" }}> Hello!</Button>
               <Box bg={{ sm: "primary", lg: "secondaryLight" }} p="lg" mt="md">
                 Responsive props!
               </Box>
               {/* <MenuQuery>
                 {({ data: { menu } }) => <Menu items={menu} />}
               </MenuQuery> */}
             </header>
           )}
         </CustomerQuery>
       ));
