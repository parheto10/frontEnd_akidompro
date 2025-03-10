import { Link, useNavigate } from "react-router-dom";
import logoagm from '../assets/img/new_logo_png.png';
import { useEffect } from "react";
import person from '../assets/img/avatar.jpg';
import Logo_Agrial from '../assets/img/Logo_AGRIAL.png';
import Logo_COOPAAHS from '../assets/img/Logo_COOPAAHS.jpg';
import { useTranslation } from "react-i18next";

function NavBar({user}){
  const {t} = useTranslation();
  const navigate = useNavigate();

  useEffect(()=>{

  },[user]);


  const logout = ()=>{
    localStorage.removeItem('_token_ucl');
    localStorage.removeItem('campagne');
    navigate('/');
  }

    return (
        <>
    <nav className="navbar navbar-top fixed-top navbar-expand mb-5" id="navbarDefault" style={{backgroundColor: "#fff", borderRadius: "25px", height: "90px", marginBottom:"60px",}} >
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
            <Link className="navbar-brand me-1 me-sm-3" to="/dash-coop/">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img src={logoagm} alt="phoenix" style={{width: "230px", height: "100px"}} />
                </div>
              </div>
            </Link>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item dropdown">
              <a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                {user && user.id === 8 ? 
                  <div className="avatar avatar-l ">
                    <img className="rounded" src={Logo_Agrial} alt="" style={{height: "80px", width:"130px", marginLeft: "-80px", marginTop: "-20px"}} />
                  </div> :
                  ""
                }
                {user && user.id === 17 ? 
                  <div className="avatar avatar-l ">
                    <img className="rounded" src={Logo_COOPAAHS} alt="" style={{height: "80px", width:"120px", marginLeft: "-50px", marginTop: "-20px"}} />
                  </div> :
                  ""
                }
              </a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
                <div className="card position-relative border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4 pb-3">
                     {user && user.id === 8 ?  <div className="avatar avatar-xl ">
                        <img className="rounded" src={Logo_Agrial} alt="" style={{height: "50px", width:"100px", marginLeft: "-30px"}} />
                      </div>: ""}
                      {user && user.id === 17 ?  <div className="avatar avatar-xl ">
                        <img className="rounded" src={Logo_COOPAAHS} alt="" style={{height: "50px", width:"100px", marginLeft: "-30px"}} />
                      </div>: ""}
                      <h6 className="mt-2 text-black">{user?.nom} {user?.prenom}</h6>
                    </div>
                 {/*    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div> */}
                  </div>
                  <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>
                        {t("Mon Profile")}
                      </span></a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>
                        Dashboard</a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Aides</a></li>
                    </ul>
                  </div>
                  <div className="card-footer p-0 border-top">
                    <hr />
                    <div className="px-3 my-2">
                       <a className="btn btn-phoenix-secondary d-flex flex-center w-100" onClick={logout}> 
                       <i class="fa-solid fa-arrow-right-from-bracket mx-3"></i>
                          {t("Déconnexion")}
                       </a>
                       </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-top navbar-slim fixed-top navbar-expand" id="topNavSlim" style={{"display":"none"}}>
        <div className="collapse navbar-collapse justify-content-between">
          <div className="navbar-logo">
            <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
            <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-1000 d-none d-sm-inline">slim</span></a>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs--2"></span></a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
                <div className="card position-relative border-0">
                  <div className="card-body p-0">
                    <div className="text-center pt-4 pb-3">
                      <div className="avatar avatar-xl ">
                        <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                      </div>
                      <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                    </div>
                    <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                  </div>
                  <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                    <ul className="nav d-flex flex-column mb-2 pb-1">
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                    </ul>
                  </div>
                  <div className="card-footer p-0 border-top">
                    <ul className="nav d-flex flex-column my-3">
                      <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                    </ul>
                    <hr />
                    <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                    <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarTop" style={{"display":"none"}}>
        <div className="navbar-logo">
          <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
              </div>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
          <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-chart-pie"></span>Home</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item active" href="index.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/project-management.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/crm.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                  </a></li>
                <li><a className="dropdown-item" href="apps/social/feed.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-cube"></span>Apps</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/crm/analytics.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deals.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/leads.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/chat.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/email/inbox.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/email-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/compose.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/events/event-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/boards.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/social/profile.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/social/settings.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/calendar.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-files-landscapes-alt"></span>Pages</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="pages/starter.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/landing/default.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/landing/alternate.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="pages/notifications.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/members.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/timeline.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/errors/404.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/403.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/500.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/darknav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/topnav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-puzzle-piece"></span>Modules</a>
              <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                <div className="border-0 scrollbar" style={{"max-height": "60vh"}}>
                  <div className="px-3 pt-4 pb-3 img-dropdown">
                    <div className="row gx-4 gy-5">
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Forms</h6>
                        </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Icons</h6>
                        </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">ECharts</h6>
                        </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Components</h6>
                        </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Tables</h6>
                        </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Utilities</h6>
                        </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-document-layout-right"></span>Documentation</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="documentation/getting-started.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                  </a></li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/styling.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="documentation/gulp.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                  </a></li>
                <li><a className="dropdown-item" href="documentation/design-file.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                  </a></li>
                <li><a className="dropdown-item" href="changelog.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                  </a></li>
                <li><a className="dropdown-item" href="showcase.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                  </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
          </li>
          <li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{"height":"19px","width":"19px","margin-bottom": "2px"}}></span></a></li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" style={{"min-width": "2.5rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{"height":"20px","width":"20px"}}></span></a>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5><button className="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay" style={{"height": "27rem"}}>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2">10m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle"><span>J</span></div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>📅</span>Created an event.<span className="ms-2 text-400 fw-bold fs--2">20m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2">1h</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Kiera Anderson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Herman Carter</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👤</span>Tagged you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Benjamin Button</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-white position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height": "20rem"}}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-l ">
                <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                    </div>
                    <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                </div>
                <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                  </ul>
                  <hr />
                  <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg" id="navbarTopSlim" style={{"display":"none"}}>
        <div className="navbar-logo">
          <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
          <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-1000 d-none d-sm-inline">slim</span></a>
        </div>
        <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
          <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-chart-pie"></span>Home</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item active" href="index.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/project-management.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/crm.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                  </a></li>
                <li><a className="dropdown-item" href="apps/social/feed.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-cube"></span>Apps</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/crm/analytics.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deals.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/leads.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/chat.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/email/inbox.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/email-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/compose.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/events/event-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/boards.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/social/profile.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/social/settings.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/calendar.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-files-landscapes-alt"></span>Pages</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="pages/starter.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/landing/default.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/landing/alternate.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="pages/notifications.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/members.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/timeline.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/errors/404.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/403.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/500.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/darknav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/topnav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-puzzle-piece"></span>Modules</a>
              <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                <div className="border-0 scrollbar" style={{"max-height": "60vh"}}>
                  <div className="px-3 pt-4 pb-3 img-dropdown">
                    <div className="row gx-4 gy-5">
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Forms</h6>
                        </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Icons</h6>
                        </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">ECharts</h6>
                        </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Components</h6>
                        </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Tables</h6>
                        </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Utilities</h6>
                        </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-document-layout-right"></span>Documentation</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="documentation/getting-started.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                  </a></li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/styling.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="documentation/gulp.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                  </a></li>
                <li><a className="dropdown-item" href="documentation/design-file.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                  </a></li>
                <li><a className="dropdown-item" href="changelog.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                  </a></li>
                <li><a className="dropdown-item" href="showcase.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                  </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="moon"></span><span className="fs--1 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="sun"></span><span className="fs--1 fw-bold">Light</span></label></div>
          </li>
          <li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{"height":"12px","width":"12px"}}></span></a></li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span data-feather="bell" style={{"height":"12px","width":"12px"}}></span></a>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5><button className="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay" style={{"height": "27rem"}}>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2">10m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle"><span>J</span></div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>📅</span>Created an event.<span className="ms-2 text-400 fw-bold fs--2">20m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2">1h</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Kiera Anderson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Herman Carter</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👤</span>Tagged you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Benjamin Button</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-white position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height": "20rem"}}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs--2"></span></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                    </div>
                    <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                </div>
                <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                  </ul>
                  <hr />
                  <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="navbarCombo" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{"display":"none"}}>
        <div className="navbar-logo">
          <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
              </div>
            </div>
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
          <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-chart-pie"></span>Home</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item active" href="index.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/project-management.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/crm.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                  </a></li>
                <li><a className="dropdown-item" href="apps/social/feed.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-cube"></span>Apps</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/crm/analytics.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deals.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/leads.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/chat.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/email/inbox.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/email-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/compose.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/events/event-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/boards.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/social/profile.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/social/settings.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/calendar.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-files-landscapes-alt"></span>Pages</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="pages/starter.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/landing/default.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/landing/alternate.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="pages/notifications.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/members.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/timeline.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/errors/404.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/403.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/500.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/darknav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/topnav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-puzzle-piece"></span>Modules</a>
              <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                <div className="border-0 scrollbar" style={{"max-height": "60vh"}}>
                  <div className="px-3 pt-4 pb-3 img-dropdown">
                    <div className="row gx-4 gy-5">
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Forms</h6>
                        </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Icons</h6>
                        </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">ECharts</h6>
                        </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Components</h6>
                        </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Tables</h6>
                        </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Utilities</h6>
                        </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-document-layout-right"></span>Documentation</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="documentation/getting-started.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                  </a></li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/styling.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="documentation/gulp.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                  </a></li>
                <li><a className="dropdown-item" href="documentation/design-file.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                  </a></li>
                <li><a className="dropdown-item" href="changelog.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                  </a></li>
                <li><a className="dropdown-item" href="showcase.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                  </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
          </li>
          <li className="nav-item"><a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{"height":"19px","width":"19px","margin-bottom": "2px"}}></span></a></li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" style={{"min-width": "2.5rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{"height":"20px","width":"20px"}}></span></a>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5><button className="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay" style={{"height": "27rem"}}>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2">10m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle"><span>J</span></div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>📅</span>Created an event.<span className="ms-2 text-400 fw-bold fs--2">20m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2">1h</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Kiera Anderson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Herman Carter</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👤</span>Tagged you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Benjamin Button</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-white position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height": "20rem"}}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-l ">
                <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                    </div>
                    <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                </div>
                <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                  </ul>
                  <hr />
                  <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-top fixed-top navbar-slim justify-content-between navbar-expand-lg" id="navbarComboSlim" data-navbar-top="combo" data-move-target="#navbarVerticalNav" style={{"display":"none"}}>
        <div className="navbar-logo">
          <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
          <a className="navbar-brand navbar-brand" href="index.html">phoenix <span className="text-1000 d-none d-sm-inline">slim</span></a>
        </div>
        <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
          <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-chart-pie"></span>Home</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item active" href="index.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/project-management.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                  </a></li>
                <li><a className="dropdown-item" href="dashboard/crm.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                  </a></li>
                <li><a className="dropdown-item" href="apps/social/feed.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-cube"></span>Apps</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                          </a></li>
                        <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/crm/analytics.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deals.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/leads.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/chat.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/email/inbox.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/email-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/email/compose.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/events/event-detail.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/boards.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="apps/social/profile.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                      </a></li>
                    <li><a className="dropdown-item" href="apps/social/settings.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="apps/calendar.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                  </a></li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-files-landscapes-alt"></span>Pages</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="pages/starter.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/landing/default.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/landing/alternate.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="pages/notifications.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/members.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                  </a></li>
                <li><a className="dropdown-item" href="pages/timeline.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                  </a></li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/errors/404.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/403.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                      </a></li>
                    <li><a className="dropdown-item" href="pages/errors/500.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                          </a></li>
                        <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                            <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                          </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/darknav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/topnav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/navbar-top.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                      </a></li>
                    <li><a className="dropdown-item" href="demo/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-puzzle-piece"></span>Modules</a>
              <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                <div className="border-0 scrollbar" style={{"max-height": "60vh"}}>
                  <div className="px-3 pt-4 pb-3 img-dropdown">
                    <div className="row gx-4 gy-5">
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Forms</h6>
                        </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Icons</h6>
                        </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">ECharts</h6>
                        </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Components</h6>
                        </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Tables</h6>
                        </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                        <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{"stroke-width":"2"}}></span>
                          <h6 className="dropdown-item-title">Utilities</h6>
                        </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-document-layout-right"></span>Documentation</a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li><a className="dropdown-item" href="documentation/getting-started.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                  </a></li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/styling.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                      </a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                      </a></li>
                    <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                        <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                      </a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="documentation/gulp.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                  </a></li>
                <li><a className="dropdown-item" href="documentation/design-file.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                  </a></li>
                <li><a className="dropdown-item" href="changelog.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                  </a></li>
                <li><a className="dropdown-item" href="showcase.html">
                    <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                  </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim"><input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="phoenixTheme" value="dark" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="moon"></span><span className="fs--1 fw-bold">Dark</span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon me-1 d-none d-sm-block" data-feather="sun"></span><span className="fs--1 fw-bold">Light</span></label></div>
          </li>
          <li className="nav-item"> <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal"><span data-feather="search" style={{"height":"12px","width":"12px"}}></span></a></li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span data-feather="bell" style={{"height":"12px","width":"12px"}}></span></a>
            <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
              <div className="card position-relative border-0">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <h5 className="text-black mb-0">Notificatons</h5><button className="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay" style={{"height": "27rem"}}>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2">10m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3">
                              <div className="avatar-name rounded-circle"><span>J</span></div>
                            </div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jane Foster</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>📅</span>Created an event.<span className="ms-2 text-400 fw-bold fs--2">20m</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Jessie Samson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2">1h</span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-300">
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Kiera Anderson</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Herman Carter</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👤</span>Tagged you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                      <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                        <div className="d-flex align-items-center justify-content-between position-relative">
                          <div className="d-flex">
                            <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                            <div className="flex-1 me-sm-3">
                              <h4 className="fs--1 text-black">Benjamin Button</h4>
                              <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                              <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                            </div>
                          </div>
                          <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                            <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0 border-top border-0">
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="10" height="10" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-white position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height": "20rem"}}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                      </a></div>
                    <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                        <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false">Olivia <span className="fa-solid fa-chevron-down fs--2"></span></a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
              <div className="card position-relative border-0">
                <div className="card-body p-0">
                  <div className="text-center pt-4 pb-3">
                    <div className="avatar avatar-xl ">
                      <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                    </div>
                    <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                  </div>
                  <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                </div>
                <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                  <ul className="nav d-flex flex-column mb-2 pb-1">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                  </ul>
                  <hr />
                  <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                  <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="dualNav" style={{"display":"none"}}>
        <div className="w-100">
          <div className="d-flex flex-between-center dual-nav-first-layer">
            <div className="navbar-logo">
              <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopCollapse" aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
              <a className="navbar-brand me-1 me-sm-3" href="index.html">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center"><img src="assets/img/icons/logo.png" alt="phoenix" width="27" />
                    <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="search-box navbar-top-search-box d-none d-lg-block" data-list='{"valueNames":["title"]}' style={{"width":"25rem"}}>
              <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
                <span className="fas fa-search search-box-icon"></span>
              </form>
              <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link btn-close-falcon p-0" aria-label="Close"></button></div>
              <div className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100">
                <div className="scrollbar-overlay" style={{"max-height": "30rem"}}>
                  <div className="list pb-3">
                    <h6 className="dropdown-header text-1000 fs--2 py-2">24 <span className="text-500">results</span></h6>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Recently Searched </h6>
                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                        </div>
                      </a>
                    </div>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Products</h6>
                    <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                        <div className="file-thumbnail me-2"><img className="h-100 w-100 fit-cover rounded-3" src="assets/img/products/60x60/3.png" alt="" /></div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-1000 title">MacBook Air - 13″</h6>
                          <p className="fs--2 mb-0 d-flex text-700"><span className="fw-medium text-600">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                        </div>
                      </a>
                      <a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                        <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/products/60x60/3.png" alt="" /></div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-1000 title">MacBook Pro - 13″</h6>
                          <p className="fs--2 mb-0 d-flex text-700"><span className="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span></p>
                        </div>
                      </a>
                    </div>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Quick Links</h6>
                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"><span className="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"> <span className="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                        </div>
                      </a>
                    </div>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Files</h6>
                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"><span className="fa-solid fa-file-zipper text-900" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"> <span className="fa-solid fa-file-lines text-900" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"> <span className="fa-solid fa-image text-900" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                        </div>
                      </a>
                    </div>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Members</h6>
                    <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                        <div className="avatar avatar-l status-online  me-2 text-900">
                          <img className="rounded-circle " src="assets/img/team/40x40/10.webp" alt="" />
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-1000 title">Carry Anna</h6>
                          <p className="fs--2 mb-0 d-flex text-700">anna@technext.it</p>
                        </div>
                      </a>
                      <a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                        <div className="avatar avatar-l  me-2 text-900">
                          <img className="rounded-circle " src="assets/img/team/40x40/12.webp" alt="" />
                        </div>
                        <div className="flex-1">
                          <h6 className="mb-0 text-1000 title">John Smith</h6>
                          <p className="fs--2 mb-0 d-flex text-700">smith@technext.it</p>
                        </div>
                      </a>
                    </div>
                    <hr className="text-200 my-0" />
                    <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Related Searches</h6>
                    <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"><span className="fa-brands fa-firefox-browser text-900" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-1000 title"> <span className="fa-brands fa-chrome text-900" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="fallback fw-bold fs-1 d-none">No Result Found.</p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-icons flex-row">
              <li className="nav-item">
                <div className="theme-control-toggle fa-icon-wait px-2"><input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label className="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="moon"></span></label><label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch theme"><span className="icon" data-feather="sun"></span></label></div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" style={{"min-width": "2.5rem"}} role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-auto-close="outside"><span data-feather="bell" style={{"height":"20px","width":"20px"}}></span></a>
                <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                  <div className="card position-relative border-0">
                    <div className="card-header p-2">
                      <div className="d-flex justify-content-between">
                        <h5 className="text-black mb-0">Notificatons</h5><button className="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="scrollbar-overlay" style={{"height": "27rem"}}>
                        <div className="border-300">
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/30.webp" alt="" /></div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Jessie Samson</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2">10m</span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:41 AM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3">
                                  <div className="avatar-name rounded-circle"><span>J</span></div>
                                </div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Jane Foster</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>📅</span>Created an event.<span className="ms-2 text-400 fw-bold fs--2">20m</span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:20 AM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3"><img className="rounded-circle avatar-placeholder" src="assets/img/team/40x40/avatar.webp" alt="" /></div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Jessie Samson</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2">1h</span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:30 AM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-300">
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/57.webp" alt="" /></div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Kiera Anderson</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>💬</span>Mentioned you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">9:11 AM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/59.webp" alt="" /></div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Herman Carter</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👤</span>Tagged you in a comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:58 PM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                          <div className="px-2 px-sm-3 py-3 border-300 notification-card position-relative read ">
                            <div className="d-flex align-items-center justify-content-between position-relative">
                              <div className="d-flex">
                                <div className="avatar avatar-m status-online me-3"><img className="rounded-circle" src="assets/img/team/40x40/58.webp" alt="" /></div>
                                <div className="flex-1 me-sm-3">
                                  <h4 className="fs--1 text-black">Benjamin Button</h4>
                                  <p className="fs--1 text-1000 mb-2 mb-sm-3 fw-normal"><span className='me-1 fs--2'>👍</span>Liked your comment.<span className="ms-2 text-400 fw-bold fs--2"></span></p>
                                  <p className="text-800 fs--1 mb-0"><span className="me-1 fas fa-clock"></span><span className="fw-bold">10:18 AM </span>August 7,2021</p>
                                </div>
                              </div>
                              <div className="font-sans-serif d-none d-sm-block"><button className="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs--2 text-900"></span></button>
                                <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">Mark as unread</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer p-0 border-top border-0">
                      <div className="my-2 text-center fw-bold fs--2 text-600"><a className="fw-bolder" href="pages/notifications.html">Notification history</a></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" id="navbarDropdownNindeDots" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" data-bs-auto-close="outside" aria-expanded="false"><svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                    <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                    <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                    <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                    <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                    <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                    <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                    <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                    <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                  </svg></a>
                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300" aria-labelledby="navbarDropdownNindeDots">
                  <div className="card bg-white position-relative border-0">
                    <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height": "20rem"}}>
                      <div className="row text-center align-items-center gx-0 gy-0">
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/behance.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-cloud.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/slack.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/gitlab.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/bitbucket.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-drive.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/trello.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/figma.webp" alt="" width="20" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/twitter.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/pinterest.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/ln.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-maps.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/google-photos.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
                          </a></div>
                        <div className="col-4"><a className="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3" href="#!"><img src="assets/img/nav-icons/spotify.webp" alt="" width="30" />
                            <p className="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
                          </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown"><a className="nav-link lh-1 pe-0" id="navbarDropdownUser" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                  <div className="avatar avatar-l ">
                    <img className="rounded-circle " src="assets/img/team/40x40/57.webp" alt="" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300" aria-labelledby="navbarDropdownUser">
                  <div className="card position-relative border-0">
                    <div className="card-body p-0">
                      <div className="text-center pt-4 pb-3">
                        <div className="avatar avatar-xl ">
                          <img className="rounded-circle " src="assets/img/team/72x72/57.webp" alt="" />
                        </div>
                        <h6 className="mt-2 text-black">Jerry Seinfield</h6>
                      </div>
                      <div className="mb-3 mx-3"><input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                    </div>
                    <div className="overflow-auto scrollbar" style={{"height": "10rem"}}>
                      <ul className="nav d-flex flex-column mb-2 pb-1">
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user"></span><span>Profile</span></a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#!"><span className="me-2 text-900" data-feather="pie-chart"></span>Dashboard</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="lock"></span>Posts &amp; Activity</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="help-circle"></span>Help Center</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="globe"></span>Language</a></li>
                      </ul>
                    </div>
                    <div className="card-footer p-0 border-top">
                      <ul className="nav d-flex flex-column my-3">
                        <li className="nav-item"><a className="nav-link px-3" href="#!"> <span className="me-2 text-900" data-feather="user-plus"></span>Add another account</a></li>
                      </ul>
                      <hr />
                      <div className="px-3"> <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span className="me-2" data-feather="log-out"> </span>Sign out</a></div>
                      <div className="my-2 text-center fw-bold fs--2 text-600"><a className="text-600 me-1" href="#!">Privacy policy</a>&bull;<a className="text-600 mx-1" href="#!">Terms</a>&bull;<a className="text-600 ms-1" href="#!">Cookies</a></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse navbar-top-collapse justify-content-center" id="navbarTopCollapse">
            <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover="data-dropdown-on-hover">
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-chart-pie"></span>Home</a>
                <ul className="dropdown-menu navbar-dropdown-caret">
                  <li><a className="dropdown-item active" href="index.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</div>
                    </a></li>
                  <li><a className="dropdown-item" href="dashboard/project-management.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clipboard"></span>Project management</div>
                    </a></li>
                  <li><a className="dropdown-item" href="dashboard/crm.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="phone"></span>CRM</div>
                    </a></li>
                  <li><a className="dropdown-item" href="apps/social/feed.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="share-2"></span>Social feed</div>
                    </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-cube"></span>Apps</a>
                <ul className="dropdown-menu navbar-dropdown-caret">
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="e-commerce" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="shopping-cart"></span>E commerce</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="admin" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                          <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Admin</span></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/add-product.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add product</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/products.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/customers.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customers</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/customer-details.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Customer details</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/orders.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Orders</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/order-details.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order details</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/admin/refund.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Refund</div>
                            </a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="customer" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                          <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Customer</span></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/homepage.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Homepage</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Product details</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/products-filter.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Products filter</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/cart.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Cart</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/checkout.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Checkout</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/shipping-info.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Shipping info</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/profile.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/favourite-stores.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Favourite stores</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/wishlist.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Wishlist</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/order-tracking.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Order tracking</div>
                            </a></li>
                          <li><a className="dropdown-item" href="apps/e-commerce/landing/invoice.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Invoice</div>
                            </a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="CRM" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="phone"></span>CRM</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/crm/analytics.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Analytics</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/deals.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deals</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/deal-details.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Deal details</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/leads.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Leads</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/lead-details.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lead details</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/reports.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/reports-details.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reports details</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/crm/add-contact.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Add contact</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="project-management" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="clipboard"></span>Project management</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/project-management/create-new.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create new</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/project-management/project-list-view.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project list view</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/project-management/project-card-view.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project card view</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/project-management/project-board-view.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project board view</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/project-management/todo-list.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Todo list</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/project-management/project-details.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Project details</div>
                        </a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="apps/chat.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="message-square"></span>Chat</div>
                    </a></li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="email" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="mail"></span>Email</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/email/inbox.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Inbox</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/email/email-detail.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Email detail</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/email/compose.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Compose</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="events" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="bookmark"></span>Events</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/events/create-an-event.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create an event</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/events/event-detail.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Event detail</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="kanban" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="trello"></span>Kanban</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/kanban/kanban.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Kanban</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/kanban/boards.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Boards</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/kanban/create-kanban-board.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Create board</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="social" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="share-2"></span>Social</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="apps/social/profile.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Profile</div>
                        </a></li>
                      <li><a className="dropdown-item" href="apps/social/settings.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Settings</div>
                        </a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="apps/calendar.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="calendar"></span>Calendar</div>
                    </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-files-landscapes-alt"></span>Pages</a>
                <ul className="dropdown-menu navbar-dropdown-caret">
                  <li><a className="dropdown-item" href="pages/starter.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="compass"></span>Starter</div>
                    </a></li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="faq" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="help-circle"></span>Faq</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/faq/faq-accordion.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq accordion</div>
                        </a></li>
                      <li><a className="dropdown-item" href="pages/faq/faq-tab.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Faq tab</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="landing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="globe"></span>Landing</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/landing/default.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Default</div>
                        </a></li>
                      <li><a className="dropdown-item" href="pages/landing/alternate.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Alternate</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="pricing" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="tag"></span>Pricing</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/pricing/pricing-column.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing column</div>
                        </a></li>
                      <li><a className="dropdown-item" href="pages/pricing/pricing-grid.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Pricing grid</div>
                        </a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="pages/notifications.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="bell"></span>Notifications</div>
                    </a></li>
                  <li><a className="dropdown-item" href="pages/members.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="users"></span>Members</div>
                    </a></li>
                  <li><a className="dropdown-item" href="pages/timeline.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="clock"></span>Timeline</div>
                    </a></li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="errors" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="alert-triangle"></span>Errors</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="pages/errors/404.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>404</div>
                        </a></li>
                      <li><a className="dropdown-item" href="pages/errors/403.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>403</div>
                        </a></li>
                      <li><a className="dropdown-item" href="pages/errors/500.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>500</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="authentication" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="lock"></span>Authentication</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="simple" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                          <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Simple</span></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="pages/authentication/simple/sign-in.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/sign-up.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/sign-out.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/forgot-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/reset-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/lock-screen.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/simple/2FA.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                            </a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="split" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                          <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Split</span></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="pages/authentication/split/sign-in.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/sign-up.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/sign-out.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/forgot-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/reset-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/lock-screen.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/split/2FA.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                            </a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="Card" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                          <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil"></span>Card</span></div>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="pages/authentication/card/sign-in.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign in</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/sign-up.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign up</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/sign-out.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sign out</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/forgot-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Forgot password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/reset-password.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Reset password</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/lock-screen.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Lock screen</div>
                            </a></li>
                          <li><a className="dropdown-item" href="pages/authentication/card/2FA.html">
                              <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>2FA</div>
                            </a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" id="layouts" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="layout"></span>Layouts</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="demo/vertical-sidenav.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical sidenav</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/dark-mode.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/sidenav-collapse.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Sidenav collapse</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/darknav.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Darknav</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/topnav-slim.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Topnav slim</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/navbar-top-slim.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top slim</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/navbar-top.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Navbar top</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/horizontal-slim.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal slim</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/combo-nav.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/combo-nav-slim.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo nav slim</div>
                        </a></li>
                      <li><a className="dropdown-item" href="demo/dual-nav.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                        </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-puzzle-piece"></span>Modules</a>
                <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                  <div className="border-0 scrollbar" style={{"max-height": "60vh"}}>
                    <div className="px-3 pt-4 pb-3 img-dropdown">
                      <div className="row gx-4 gy-5">
                        <div className="col-12 col-sm-6 col-md-4">
                          <div className="dropdown-item-group"><span className="me-2" data-feather="file-text" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">Forms</h6>
                          </div><a className="dropdown-link" href="modules/forms/basic/form-control.html">Form control</a><a className="dropdown-link" href="modules/forms/basic/input-group.html">Input group</a><a className="dropdown-link" href="modules/forms/basic/select.html">Select</a><a className="dropdown-link" href="modules/forms/basic/checks.html">Checks</a><a className="dropdown-link" href="modules/forms/basic/range.html">Range</a><a className="dropdown-link" href="modules/forms/basic/floating-labels.html">Floating labels</a><a className="dropdown-link" href="modules/forms/basic/layout.html">Layout</a><a className="dropdown-link" href="modules/forms/advance/advance-select.html">Advance select</a><a className="dropdown-link" href="modules/forms/advance/date-picker.html">Date picker</a><a className="dropdown-link" href="modules/forms/advance/editor.html">Editor</a><a className="dropdown-link" href="modules/forms/advance/file-uploader.html">File uploader</a><a className="dropdown-link" href="modules/forms/advance/rating.html">Rating</a><a className="dropdown-link" href="modules/forms/advance/emoji-button.html">Emoji button</a><a className="dropdown-link" href="modules/forms/validation.html">Validation</a><a className="dropdown-link" href="modules/forms/wizard.html">Wizard</a>
                          <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="grid" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">Icons</h6>
                          </div><a className="dropdown-link" href="modules/icons/feather.html">Feather</a><a className="dropdown-link" href="modules/icons/font-awesome.html">Font awesome</a><a className="dropdown-link" href="modules/icons/unicons.html">Unicons</a>
                          <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="bar-chart-2" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">ECharts</h6>
                          </div><a className="dropdown-link" href="modules/echarts/line-charts.html">Line charts</a><a className="dropdown-link" href="modules/echarts/bar-charts.html">Bar charts</a><a className="dropdown-link" href="modules/echarts/candlestick-charts.html">Candlestick charts</a><a className="dropdown-link" href="modules/echarts/geo-map.html">Geo map</a><a className="dropdown-link" href="modules/echarts/scatter-charts.html">Scatter charts</a><a className="dropdown-link" href="modules/echarts/pie-charts.html">Pie charts</a><a className="dropdown-link" href="modules/echarts/gauge-chart.html">Gauge chart</a><a className="dropdown-link" href="modules/echarts/radar-charts.html">Radar charts</a><a className="dropdown-link" href="modules/echarts/heatmap-charts.html">Heatmap charts</a><a className="dropdown-link" href="modules/echarts/how-to-use.html">How to use</a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                          <div className="dropdown-item-group"><span className="me-2" data-feather="package" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">Components</h6>
                          </div><a className="dropdown-link" href="modules/components/accordion.html">Accordion</a><a className="dropdown-link" href="modules/components/avatar.html">Avatar</a><a className="dropdown-link" href="modules/components/alerts.html">Alerts</a><a className="dropdown-link" href="modules/components/badge.html">Badge</a><a className="dropdown-link" href="modules/components/breadcrumb.html">Breadcrumb</a><a className="dropdown-link" href="modules/components/button.html">Buttons</a><a className="dropdown-link" href="modules/components/calendar.html">Calendar</a><a className="dropdown-link" href="modules/components/card.html">Card</a><a className="dropdown-link" href="modules/components/carousel/bootstrap.html">Bootstrap</a><a className="dropdown-link" href="modules/components/carousel/swiper.html">Swiper</a><a className="dropdown-link" href="modules/components/collapse.html">Collapse</a><a className="dropdown-link" href="modules/components/dropdown.html">Dropdown</a><a className="dropdown-link" href="modules/components/list-group.html">List group</a><a className="dropdown-link" href="modules/components/modal.html">Modals</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navs.html">Navs</a><a className="dropdown-link" href="modules/components/navs-and-tabs/navbar.html">Navbar</a><a className="dropdown-link" href="modules/components/navs-and-tabs/tabs.html">Tabs</a><a className="dropdown-link" href="modules/components/offcanvas.html">Offcanvas</a><a className="dropdown-link" href="modules/components/progress-bar.html">Progress bar</a><a className="dropdown-link" href="modules/components/placeholder.html">Placeholder</a><a className="dropdown-link" href="modules/components/pagination.html">Pagination</a><a className="dropdown-link" href="modules/components/popovers.html">Popovers</a><a className="dropdown-link" href="modules/components/scrollspy.html">Scrollspy</a><a className="dropdown-link" href="modules/components/sortable.html">Sortable</a><a className="dropdown-link" href="modules/components/spinners.html">Spinners</a><a className="dropdown-link" href="modules/components/toast.html">Toast</a><a className="dropdown-link" href="modules/components/tooltips.html">Tooltips</a><a className="dropdown-link" href="modules/components/chat-widget.html">Chat widget</a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                          <div className="dropdown-item-group"><span className="me-2" data-feather="columns" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">Tables</h6>
                          </div><a className="dropdown-link" href="modules/tables/basic-tables.html">Basic tables</a><a className="dropdown-link" href="modules/tables/advance-tables.html">Advance tables</a><a className="dropdown-link" href="modules/tables/bulk-select.html">Bulk Select</a>
                          <div className="dropdown-item-group mt-5"><span className="me-2" data-feather="tool" style={{"stroke-width":"2"}}></span>
                            <h6 className="dropdown-item-title">Utilities</h6>
                          </div><a className="dropdown-link" href="modules/utilities/background.html">Background</a><a className="dropdown-link" href="modules/utilities/borders.html">Borders</a><a className="dropdown-link" href="modules/utilities/colors.html">Colors</a><a className="dropdown-link" href="modules/utilities/display.html">Display</a><a className="dropdown-link" href="modules/utilities/flex.html">Flex</a><a className="dropdown-link" href="modules/utilities/stacks.html">Stacks</a><a className="dropdown-link" href="modules/utilities/float.html">Float</a><a className="dropdown-link" href="modules/utilities/grid.html">Grid</a><a className="dropdown-link" href="modules/utilities/interactions.html">Interactions</a><a className="dropdown-link" href="modules/utilities/opacity.html">Opacity</a><a className="dropdown-link" href="modules/utilities/overflow.html">Overflow</a><a className="dropdown-link" href="modules/utilities/position.html">Position</a><a className="dropdown-link" href="modules/utilities/shadows.html">Shadows</a><a className="dropdown-link" href="modules/utilities/sizing.html">Sizing</a><a className="dropdown-link" href="modules/utilities/spacing.html">Spacing</a><a className="dropdown-link" href="modules/utilities/typography.html">Typography</a><a className="dropdown-link" href="modules/utilities/vertical-align.html">Vertical align</a><a className="dropdown-link" href="modules/utilities/visibility.html">Visibility</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle lh-1" href="#!" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span className="uil fs-0 me-2 uil-document-layout-right"></span>Documentation</a>
                <ul className="dropdown-menu navbar-dropdown-caret">
                  <li><a className="dropdown-item" href="documentation/getting-started.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="life-buoy"></span>Getting started</div>
                    </a></li>
                  <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="customization" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="settings"></span>Customization</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="documentation/customization/configuration.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Configuration</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/customization/styling.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Styling</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/customization/dark-mode.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dark mode</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/customization/plugin.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Plugin</div>
                        </a></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-inside"><a className="dropdown-item dropdown-toggle" id="layouts-doc" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                      <div className="dropdown-item-wrapper"><span className="uil fs-0 uil-angle-right lh-1 dropdown-indicator-icon"></span><span><span className="me-2 uil" data-feather="table"></span>Layouts doc</span></div>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="documentation/layouts/vertical-navbar.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Vertical navbar</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/layouts/horizontal-navbar.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Horizontal navbar</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/layouts/combo-navbar.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Combo navbar</div>
                        </a></li>
                      <li><a className="dropdown-item" href="documentation/layouts/dual-nav.html">
                          <div className="dropdown-item-wrapper"><span className="me-2 uil"></span>Dual nav</div>
                        </a></li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="documentation/gulp.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg"></span>Gulp</div>
                    </a></li>
                  <li><a className="dropdown-item" href="documentation/design-file.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="figma"></span>Design file</div>
                    </a></li>
                  <li><a className="dropdown-item" href="changelog.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="git-merge"></span>Changelog</div>
                    </a></li>
                  <li><a className="dropdown-item" href="showcase.html">
                      <div className="dropdown-item-wrapper"><span className="me-2 uil" data-feather="monitor"></span>Showcase</div>
                    </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade" id="searchBoxModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style={{"--phoenix-backdrop-opacity": "1"}}>
        <div className="modal-dialog">
          <div className="modal-content mt-15 rounded-pill">
            <div className="modal-body p-0">
              <div className="search-box navbar-top-search-box" data-list='{"valueNames":["title"]}' style={{"width": "auto"}}>
                <form className="position-relative" data-bs-toggle="search" data-bs-display="static"><input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                  <span className="fas fa-search search-box-icon"></span>
                </form>
                <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button className="btn btn-link btn-close-falcon p-0" aria-label="Close"></button></div>
                <div className="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100">
                  <div className="scrollbar-overlay" style={{"max-height": "30rem"}}>
                    <div className="list pb-3">
                      <h6 className="dropdown-header text-1000 fs--2 py-2">24 <span className="text-500">results</span></h6>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Recently Searched </h6>
                      <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"><span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"> <span className="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                          </div>
                        </a>
                      </div>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Products</h6>
                      <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                          <div className="file-thumbnail me-2"><img className="h-100 w-100 fit-cover rounded-3" src="assets/img/products/60x60/3.png" alt="" /></div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-1000 title">MacBook Air - 13″</h6>
                            <p className="fs--2 mb-0 d-flex text-700"><span className="fw-medium text-600">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                          </div>
                        </a>
                        <a className="dropdown-item py-2 d-flex align-items-center" href="apps/e-commerce/landing/product-details.html">
                          <div className="file-thumbnail me-2"><img className="img-fluid" src="assets/img/products/60x60/3.png" alt="" /></div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-1000 title">MacBook Pro - 13″</h6>
                            <p className="fs--2 mb-0 d-flex text-700"><span className="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span></p>
                          </div>
                        </a>
                      </div>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Quick Links</h6>
                      <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"><span className="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"> <span className="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Files</h6>
                      <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"><span className="fa-solid fa-file-zipper text-900" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"> <span className="fa-solid fa-file-lines text-900" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"> <span className="fa-solid fa-image text-900" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                          </div>
                        </a>
                      </div>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Members</h6>
                      <div className="py-2"><a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                          <div className="avatar avatar-l status-online  me-2 text-900">
                            <img className="rounded-circle " src="assets/img/team/40x40/10.webp" alt="" />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-1000 title">Carry Anna</h6>
                            <p className="fs--2 mb-0 d-flex text-700">anna@technext.it</p>
                          </div>
                        </a>
                        <a className="dropdown-item py-2 d-flex align-items-center" href="pages/members.html">
                          <div className="avatar avatar-l  me-2 text-900">
                            <img className="rounded-circle " src="assets/img/team/40x40/12.webp" alt="" />
                          </div>
                          <div className="flex-1">
                            <h6 className="mb-0 text-1000 title">John Smith</h6>
                            <p className="fs--2 mb-0 d-flex text-700">smith@technext.it</p>
                          </div>
                        </a>
                      </div>
                      <hr className="text-200 my-0" />
                      <h6 className="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">Related Searches</h6>
                      <div className="py-2"><a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"><span className="fa-brands fa-firefox-browser text-900" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="apps/e-commerce/landing/product-details.html">
                          <div className="d-flex align-items-center">
                            <div className="fw-normal text-1000 title"> <span className="fa-brands fa-chrome text-900" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="fallback fw-bold fs-1 d-none">No Result Found.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default NavBar;