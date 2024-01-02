import React, { useRef, useState, useEffect } from 'react';
import { XMarkIcon, ArrowLeftOnRectangleIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';

const nest = function (items, idMenu = null, link = 'id_menu_padre') {
  return items.filter(item => item[link] === idMenu).map(item => ({
    ...item,
    children: nest(items, item.id_menu).length > 0 ? nest(items, item.id_menu) : undefined
  }));
};

const Sidebar = (props) => {
  const {
    sidebarOpen,
    setSidebarOpen,
    menu,
    sidebarStyles,
    optionStyles,
    iconOptionStyles,
    suboptionStyles,
    iconSuboptionStyles,
    onClickLogout,
    appTitleStyles,
    userInfoStyles
  } = props;

  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [options, setOptions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    const menus = nest(menu);
    setOptions(menus);
  }, [menu]);

  useEffect(() => {
    registerBreakpoint();
  }, []);

  const registerBreakpoint = () => {
    if (typeof document !== 'undefined') {
      try {
        // Your breakpoint registration logic here
        // ...

        const arrayEstadoMq = []; // Replace this line with your actual state retrieval logic

        if (arrayEstadoMq.length && (arrayEstadoMq[0] === 'not-mobile' || arrayEstadoMq[0] === 'desktop')) {
          setIsMobile(false);
        } else {
          setIsMobile(true);
        }
      } catch (e) {
        console.error(`Error al registrar mq breackpoints - ${e.message}`);
      }
    }
  };

  const getSidebarClass = () => {
    let resultCss = '';

    if (isMobile === true) {
      resultCss = `flex flex-col z-60 top-1/3 h-4/6 overflow-y-auto w-full shrink-0 p-4 rounded-md duration-[400ms] ease-in-out
        ${sidebarOpen ? 'translate-y-0 fixed' : 'transform translate-y-[100vh] fixed'}`;
    } else {
      resultCss = `flex flex-col z-40 left-0 top-0 h-screen overflow-y-auto w-64 shrink-0 p-4 transition-all duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0 relative' : '-translate-x-64 absolute'}`;
    }

    return resultCss;
  };

  const setSelected = (option) => {
    const menus = options.slice();
    const idx = menus.indexOf(option);
    option.isSelected = option.isSelected ? !option.isSelected : true;
    menus.splice(idx, 1, option);
    setOptions(menus);

    if (option.path && option.path !== null) {
      // Your logic for setting title and navigating
    }
  };

  const setSelectedSubOption = (option, suboption) => {
    const menus = options.slice();
    const idxOption = menus.indexOf(option);
    const idxSubOption = option.children.indexOf(suboption);
    suboption.isSelected = suboption.isSelected ? !suboption.isSelected : true;
    option.children.splice(idxSubOption, 1, suboption);
    setOptions(menus);
    // Your logic for setting title and navigating
  };

  const SubMenuOption = ({ option }) => {
    if (option.children && option.children.length > 0 && option.isSelected === true) {
      return (
        <ul id="dropdown-example" className="ml-1 py-1 space-y-1">
          {option.children.map(suboption => {
            if (suboption.type === 'divisor') {
              return <li key={suboption.id_menu}><hr /></li>;
            }

            // Your logic for getting subMenu icons
            const Icono = null; // Replace this line with your actual logic for getting icons

            return (
              <li
                key={suboption.id_menu}
                onClick={() => setSelectedSubOption(option, suboption)}
                title={suboption.title}
                className="cursor-pointer"
              >
                <div className={`flex items-center p-2 pl-3 w-full truncate overflow-hidden rounded-lg transition duration-75 group cursor-pointer ${Array.isArray(suboptionStyles) ? suboptionStyles.join(' ') : suboptionStyles} ${getFontSize(suboptionStyles)}`}
                  title={suboption.title}
                >
                  {Icono && <Icono className={`h-7 w-7 text-white fill-current ${Array.isArray(iconSuboptionStyles) ? iconSuboptionStyles.join(' ') : iconSuboptionStyles}`} />}
                  <div className="inline-flex truncate text-ellipsis">{suboption.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }

    return null;
  };

  const MenuOption = ({ option }) => {
    // Your logic for getting Menu icons
    const Icono = null; // Replace this line with your actual logic for getting icons

    if (option.type === 'titulo') {
      return (
        <>
          <button
            type="button"
            className={`flex items-center p-2 w-full rounded-lg transition duration-75 group ${Array.isArray(optionStyles) ? optionStyles.join(' ') : optionStyles} ${getFontSize(optionStyles)}`}
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
            title={option.title}
          >
            <div className="flex-1 ml-3 text-left whitespace-nowrap truncate text-ellipsis">
              {option.title}
            </div>
            {Icono && <Icono className={`h-7 w-7 text-white fill-current ${Array.isArray(iconOptionStyles) ? iconOptionStyles.join(' ') : iconOptionStyles}`} />}
          </button>
        </>
      );
    }

    return (
      <>
        <button
          type="button"
          className={`flex items-center p-2 w-full rounded-lg transition duration-75 group ${Array.isArray(optionStyles) ? optionStyles.join(' ') : optionStyles} ${getFontSize(optionStyles)}`}
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
          title={option.title}
          onClick={() => setSelected(option)}
        >
          {Icono && <Icono className={`h-7 w-7 text-white fill-current ${Array.isArray(iconOptionStyles) ? iconOptionStyles.join(' ') : iconOptionStyles}`} />}
          <div className="flex-1 ml-3 text-left whitespace-nowrap truncate text-ellipsis">
            {option.title}
          </div>
          {option.children && option.children.length > 0 && <ChevronDownIcon className="h-6 w-6" />}
        </button>
        <SubMenuOption option={option} />
      </>
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 md:hidden md:z-auto transition-opacity duration-200 
          ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${Array.isArray(sidebarStyles) ? sidebarStyles.join(' ') : sidebarStyles}`}
        aria-hidden="true"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <div
        id="sidebar"
        ref={sidebar}
        className={`${getSidebarClass()} ${Array.isArray(sidebarStyles) ? sidebarStyles.join(' ') : sidebarStyles}`}
      >
        {/* Rest of your Sidebar component */}
      </div>
    </>
  );
};

Sidebar.propTypes = {
  // Your prop types
};

export default Sidebar;
