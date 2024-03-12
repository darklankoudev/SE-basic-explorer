const Header = () => {
  return (
    <>
      <div class="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
        <div class="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
          <div class="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
            {/* <!-- Sự kiện sidebar và search  --> */}

            <div class="flex items-center gap-1 xl:hidden">
              <a
                class="p-2 text-white rounded-full open-mobile-menu hover:bg-white/5"
                href=""
              >
                <i
                  data-tw-merge=""
                  data-lucide="align-justify"
                  class="stroke-[1] h-[18px] w-[18px]"
                ></i>
              </a>
              <a
                class="p-2 text-white rounded-full hover:bg-white/5"
                data-tw-toggle="modal"
                data-tw-target="#quick-search"
                href="javascript:;"
              >
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  class="stroke-[1] h-[18px] w-[18px]"
                ></i>
              </a>
            </div>

            {/* <!-- kết thúc sự kiện sidebar và search --> */}

            {/* <!-- BEGIN: Breadcrumb --> */}
            <nav aria-label="breadcrumb" class="flex flex-1 hidden xl:block">
              <ol class="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
                <li class="">
                  <a href="">App</a>
                </li>
                <li class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white">
                  <a href="">Overview</a>
                </li>
              </ol>
            </nav>

            <div
              class="relative justify-center flex-1 hidden xl:flex"
              data-tw-toggle="modal"
              data-tw-target="#quick-search"
            >
              <div class="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  class="stroke-[1] h-[18px] w-[18px]"
                ></i>
                <div class="ml-2.5 mr-auto">Quick search ...</div>
              </div>
            </div>
            <div
              id="quick-search"
              aria-hidden="true"
              tabindex="-1"
              class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.1s]"
            >
              <div class="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                    <i
                      data-tw-merge=""
                      data-lucide="search"
                      class="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"
                    ></i>
                  </div>
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Search height, txh,..."
                    class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"
                  />
                  <div class="absolute inset-y-0 right-0 flex w-14 items-center">
                    <div class="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                      ESC
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center flex-1">
              <div class="flex items-center gap-1 ml-auto">
                <a
                  class="p-2 text-white rounded-full hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#activities-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="layout-grid"
                    class="stroke-[1] h-[18px] w-[18px]"
                  ></i>
                </a>
                <a
                  class="p-2 text-white rounded-full request-full-screen hover:bg-white/5"
                  href=""
                >
                  <i
                    data-tw-merge=""
                    data-lucide="expand"
                    class="stroke-[1] h-[18px] w-[18px]"
                  ></i>
                </a>
              </div>
              <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                class="dropdown relative ml-5"
              >
                <button
                  data-tw-toggle="dropdown"
                  aria-expanded="false"
                  class="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"
                >
                  <img
                    src="dist/images/users/user5-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                  />
                </button>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                  data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                  class="dropdown-menu absolute z-[9999] hidden"
                >
                  <div
                    data-tw-merge=""
                    class="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-56 mt-1"
                  >
                    <a
                      data-tw-toggle="modal"
                      data-tw-target="#switch-account"
                      class="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="toggle-left"
                        class="stroke-[1] w-4 h-4 mr-2"
                      ></i>
                      Choose Chain
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-tw-backdrop=""
              aria-hidden="true"
              tabindex="-1"
              id="switch-account"
              class="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
            >
              <div
                data-tw-merge=""
                class="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]"
              >
                <div class="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                  <h2 class="text-base font-medium">Swicth Chain</h2>
                </div>
                <div data-tw-merge="" class="p-5 px-2.5 pb-4 pt-3.5">
                  <div class="flex flex-col gap-1.5">
                    <div class="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      {/* <!-- <div class="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                                                        <img src="dist/images/users/user8-50x50.jpg" alt="Tailwise - Admin Dashboard Template">
                                                    </div> --> */}
                      <div class="ml-3.5">
                        <div class="font-medium">Namada</div>
                        <div class="mt-0.5 text-xs text-slate-500">
                          shielded-expedition.88f17d1d14
                        </div>
                      </div>
                      <div class="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          checked=""
                          type="checkbox"
                          class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-0"
                          value="switch-account"
                        />
                        <div class="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            class="h-3 w-3 stroke-[1.5]"
                          ></i>
                        </div>
                        <div class="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
