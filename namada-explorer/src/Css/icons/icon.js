import React, { useEffect } from 'react';
import { Tabulator } from 'tabulator-tables';
import { createIcons, icons } from 'lucide';
import 'tabulator-tables/dist/css/tabulator.min.css';
import Createii from './createicon';

const MyComponent = () => {
    useEffect(() => {
        const tabulatorElement = document.getElementById('tabulator');
        if (!tabulatorElement) return;

        const tabulator = new Tabulator(tabulatorElement, {
            ajaxURL: "https://dummy-data.left4code.com",
            paginationMode: "remote",
            filterMode: "remote",
            sortMode: "remote",
            printAsHtml: true,
            printStyled: true,
            pagination: true,
            paginationSize: 10,
            paginationSizeSelector: [10, 20, 30, 40],
            layout: "fitColumns",
            responsiveLayout: "collapse",
            placeholder: "No matching records found",
            columns: [
                {
                    title: "",
                    formatter: "responsiveCollapse",
                    width: 40,
                    minWidth: 30,
                    hozAlign: "center",
                    resizable: false,
                    headerSort: false,
                },

                // For HTML table
                {
                    title: "PRODUCT NAME",
                    minWidth: 200,
                    responsive: 0,
                    field: "name",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell) {
                        const response = cell.getData();
                        return `<div>
                            <div class="font-medium whitespace-nowrap">${response.name}</div>
                            <div class="text-xs text-slate-500 whitespace-nowrap">${response.category}</div>
                        </div>`;
                    },
                },
                {
                    title: "IMAGES",
                    minWidth: 200,
                    field: "images",
                    hozAlign: "center",
                    headerHozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell) {
                        const response = cell.getData();
                        return `<div class="flex lg:justify-center">
                            <div class="w-10 h-10 intro-x image-fit">
                                <img alt="Image 1" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="https://left4code.com/dummy/images/${response.images[0]}">
                            </div>
                            <div class="w-10 h-10 -ml-5 intro-x image-fit">
                                <img alt="Image 2" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="https://left4code.com/dummy/images/${response.images[1]}">
                            </div>
                            <div class="w-10 h-10 -ml-5 intro-x image-fit">
                                <img alt="Image 3" class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" src="https://left4code.com/dummy/images/${response.images[2]}">
                            </div>
                        </div>`;
                    },
                },
                {
                    title: "REMAINING STOCK",
                    minWidth: 200,
                    field: "remaining_stock",
                    hozAlign: "center",
                    headerHozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                },
                {
                    title: "STATUS",
                    minWidth: 200,
                    field: "status",
                    hozAlign: "center",
                    headerHozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell) {
                        const response = cell.getData();
                        return `<div class="flex items-center lg:justify-center ${response.status ? "text-success" : "text-danger"}">
                            <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> ${response.status ? "Active" : "Inactive"}
                        </div>`;
                    },
                },
                {
                    title: "ACTIONS",
                    minWidth: 200,
                    field: "actions",
                    responsive: 1,
                    hozAlign: "center",
                    headerHozAlign: "center",
                    vertAlign: "middle",
                    print: false,
                    download: false,
                    formatter(cell) {
                        const response = cell.getData();
                        const editHandler = () => {
                            alert("Edit");
                        };

                        const deleteHandler = () => {
                            alert("Delete");
                        };

                        const editButton = document.createElement("button");
                        editButton.className = "flex items-center mr-3 edit";
                        editButton.innerHTML = `<i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit`;
                        editButton.addEventListener("click", editHandler);

                        const deleteButton = document.createElement("button");
                        deleteButton.className = "flex items-center delete text-danger";
                        deleteButton.innerHTML = `<i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete`;
                        deleteButton.addEventListener("click", deleteHandler);

                        const container = document.createElement("div");
                        container.className = "flex items-center lg:justify-center";
                        container.appendChild(editButton);
                        container.appendChild(deleteButton);

                        return container;
                    },
                },

                // For print format
                {
                    title: "PRODUCT NAME",
                    field: "name",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "CATEGORY",
                    field: "category",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "REMAINING STOCK",
                    field: "remaining_stock",
                    visible: false,
                    print: true,
                    download: true,
                },
                {
                    title: "STATUS",
                    field: "status",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue() ? "Active" : "Inactive";
                    },
                },
                {
                    title: "IMAGE 1",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[0];
                    },
                },
                {
                    title: "IMAGE 2",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[1];
                    },
                },
                {
                    title: "IMAGE 3",
                    field: "images",
                    visible: false,
                    print: true,
                    download: true,
                    formatterPrint(cell) {
                        return cell.getValue()[2];
                    },
                },
            ],
        });
        createIcons({
            icons: [],
            "stroke-width": 1.5,
            nameAttr: "data-lucide",
        });

       

        function filterHTMLForm() {
            let field = document.getElementById("tabulator-html-filter-field").value;
            let type = document.getElementById("tabulator-html-filter-type").value;
            let value = document.getElementById("tabulator-html-filter-value").value;
            tabulator.setFilter(field, type, value);
        }

        document.getElementById("tabulator-html-filter-form").addEventListener(
            "keypress",
            function (event) {
                let keycode = event.keyCode ? event.keyCode : event.which;
                if (keycode === 13) {
                    event.preventDefault();
                    filterHTMLForm();
                }
            }
        );

        document.getElementById("tabulator-html-filter-go").addEventListener("click", filterHTMLForm);

        document.getElementById("tabulator-html-filter-reset").addEventListener("click", function (event) {
            document.getElementById("tabulator-html-filter-field").value = "name";
            document.getElementById("tabulator-html-filter-type").value = "like";
            document.getElementById("tabulator-html-filter-value").value = "";
            filterHTMLForm();
        });

        document.getElementById("tabulator-export-csv").addEventListener("click", function (event) {
            tabulator.download("csv", "data.csv");
        });

        document.getElementById("tabulator-export-json").addEventListener("click", function (event) {
            tabulator.download("json", "data.json");
        });

        document.getElementById("tabulator-export-xlsx").addEventListener("click", function (event) {
            tabulator.download("xlsx", "data.xlsx", {
                sheetName: "Products",
            });
        });

        document.getElementById("tabulator-export-html").addEventListener("click", function (event) {
            tabulator.download("html", "data.html", {
                style: true,
            });
        });

        document.getElementById("tabulator-print").addEventListener("click", function (event) {
            tabulator.print();
        });

        return () => {
            tabulator.destroy();
        };
        
    }, []);
            
    return <div>
         <Createii/>
         <div id="tabulator">
           
           </div>;
    </div>
   

    
};

export default MyComponent;