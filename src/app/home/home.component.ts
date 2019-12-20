import { Component, OnInit } from '@angular/core';
import * as data from '../../data/cv.json';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  critereskey = [];
  criteresList = [];
  selectedcriters = [];
  dropdownSettings = {};
  keyword = [];
  result = [];
  cv: any = (data as any).default;
  itemList = [];
  selectedItems = [];
  settings = {};
  ageList = [];
  selectedAge = [];
  settingsAge = {};
  payseList = [];
  selectedPays = [];
  Pays = [];
  settingsPays = {};
  AgeMax: number;
  AgeMin: number;
  ag: number;
  verifpays: boolean;

  constructor(private router: Router) { }

  ngOnInit() {

    console.log(this.cv[0].cv.img);
    // competences
    this.itemList = [
      { id: 1, itemName: 'angular', category: 'Informatique' },
      { id: 2, itemName: 'ajax', category: 'Informatique' },
      { id: 3, itemName: 'algorithme', category: 'Informatique' },
      { id: 4, itemName: 'agile', category: 'Informatique' },
      { id: 5, itemName: 'bi', category: 'Informatique' },
      { id: 6, itemName: 'bigdata', category: 'Informatique' },
      { id: 7, itemName: 'c#', category: 'Informatique' },
      { id: 8, itemName: 'web', category: 'Informatique' },
      { id: 9, itemName: 'html', category: 'Informatique' },
      { id: 10, itemName: 'php', category: 'Informatique' },
      { id: 11, itemName: 'css', category: 'Informatique' },
      { id: 12, itemName: 'BOOTSTRAP', category: 'Informatique' },
      { id: 13, itemName: 'javascript', category: 'Informatique' },
      { id: 14, itemName: 'java', category: 'Informatique' },
      { id: 15, itemName: 'js', category: 'Informatique' },
      { id: 16, itemName: 'mysql', category: 'Informatique' },
      { id: 17, itemName: 'oracle', category: 'Informatique' },
      { id: 18, itemName: 'sqlserver', category: 'Informatique' },
      { id: 19, itemName: 'mongodb', category: 'Informatique' },
      { id: 20, itemName: 'spring', category: 'Informatique' },
      { id: 21, itemName: 'springboot', category: 'Informatique' },
      { id: 22, itemName: 'symphony', category: 'Informatique' },
      { id: 23, itemName: 'laravel', category: 'Informatique' },
      { id: 24, itemName: 'intelligence', category: 'Informatique' },
      { id: 25, itemName: 'programmation', category: 'Informatique' },
      { id: 26, itemName: 'WORDPRESS', category: 'Informatique' },
      { id: 27, itemName: 'JOOMLA', category: 'Informatique' },
      { id: 28, itemName: 'jee', category: 'Informatique' },
      { id: 29, itemName: 'mvc', category: 'Informatique' },
      { id: 30, itemName: 'scrom', category: 'Informatique' },
      { id: 31, itemName: 'mobile', category: 'Informatique' },
      { id: 32, itemName: 'ionic', category: 'Informatique' },
      { id: 33, itemName: 'flutter', category: 'Informatique' },
      { id: 34, itemName: 'kotlin', category: 'Informatique' },
      { id: 35, itemName: 'securite', category: 'Informatique' },
      { id: 36, itemName: 'jquery', category: 'Informatique' },
      { id: 37, itemName: 'dotnet core', category: 'Informatique' },
      { id: 38, itemName: 'windev', category: 'Informatique' },
      { id: 39, itemName: 'rest', category: 'Informatique' },
      { id: 40, itemName: 'soap', category: 'Informatique' },
      { id: 41, itemName: 'data mining', category: 'Informatique' },
      { id: 42, itemName: 'Animateur 2D', category: 'Designer' },
      { id: 43, itemName: 'Coloriste', category: 'Designer' },
      { id: 44, itemName: 'Designer UI', category: 'Designer' },
      { id: 45, itemName: 'UX designer', category: 'Designer' },
      { id: 46, itemName: 'Webdesigner', category: 'Designer' },
      { id: 47, itemName: 'Game designer', category: 'Designer' },
      { id: 48, itemName: 'Infographiste', category: 'Designer' },
      { id: 49, itemName: 'Modeleur 3D', category: 'Designer' },
      { id: 50, itemName: 'Monteur vidéo', category: 'Designer' },
      { id: 51, itemName: 'Photographe', category: 'Designer' },
      { id: 52, itemName: 'Responsable design', category: 'Designer' },
      { id: 53, itemName: 'Responsable UX', category: 'Designer' },
      { id: 54, itemName: 'Photoshop', category: 'Designer' },
      { id: 55, itemName: 'Illustrator', category: 'Designer' },
      { id: 56, itemName: 'Innovation', category: 'RH' },
      { id: 57, itemName: 'Communication', category: 'RH' },
      { id: 58, itemName: 'Jugement', category: 'RH' },
      { id: 59, itemName: 'Évaluation', category: 'RH' },
      { id: 60, itemName: 'Organisation', category: 'RH' },
      { id: 61, itemName: 'Négociation', category: 'RH' },
      { id: 62, itemName: 'juridique ', category: 'RH' },
      { id: 63, itemName: 'Vision ', category: 'Gestionnaire' },
      { id: 64, itemName: 'Communication ', category: 'Gestionnaire' },
      { id: 65, itemName: 'autonome  ', category: 'Gestionnaire' },
      { id: 66, itemName: 'responsable ', category: 'Gestionnaire' },
      { id: 67, itemName: 'décisionels ', category: 'Gestionnaire' },
      { id: 68, itemName: 'courageux ', category: 'Gestionnaire' },
      { id: 69, itemName: 'sens politique ', category: 'Gestionnaire' },
      { id: 70, itemName: 'courageux ', category: 'Gestionnaire' },
    ];


    this.settings = {
      singleSelection: false,
      text: 'Compétences',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      groupBy: 'category'
    };

    // Age
    this.ageList = [
      { id: 1, itemName: '20-30' },
      { id: 2, itemName: '30-40' },
      { id: 3, itemName: '40-50' },

    ];
    this.settingsAge = {
      singleSelection: true,
      text: 'Age',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 3,
    };
// ----------------------------------------------
// Pays
    this.payseList = [
      { id: 1, itemName: 'Afrique du Sud', category: 'A' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/South_Africa.jpg'},
      { id: 2, itemName: 'Algérie', category: 'A' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Algeria.jpg'},
      { id: 3, itemName: 'Allemagne', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Germany.jpg' },
      { id: 4, itemName: 'Arabie Saoudite', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Saudi_Arabia.jpg' },
      { id: 5, itemName: 'Argentine', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg' },
      { id: 6, itemName: 'Arménie', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Armenia.jpg' },
      { id: 7, itemName: 'Australie', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Australia.jpg' },
      { id: 8, itemName: 'Autriche', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Austria.jpg' },
      { id: 9, itemName: 'Belgique', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Belgium.jpg' },
      { id: 10, itemName: 'Brésil', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg' },
      { id: 11, itemName: 'Bulgarie', category: 'A', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Bulgaria.jpg' },
      { id: 12, itemName: 'Canada', category: 'C', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg' },
      { id: 13, itemName: 'Chine', category: 'C' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/China.jpg'},
      { id: 14, itemName: 'Corée du Nord', category: 'C', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/North_Korea.jpg' },
      { id: 15, itemName: 'Corée du Sud', category: 'C', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/South_Korea.jpg' },
      { id: 16, itemName: 'Croatie', category: 'C', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Croatia.jpg' },
      { id: 17, itemName: 'Danemark', category: 'D', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Denmark.jpg' },
      { id: 18, itemName: 'Égypte', category: 'E', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Egypt.jpg' },
      { id: 19, itemName: 'Émirats arabes unis', category: 'E' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/United_Arab_Emirates.jpg' },
      { id: 20, itemName: 'Espagne', category: 'E', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg' },
      { id: 21, itemName: 'États-Unis', category: 'E', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/United_States.jpg' },
      { id: 22, itemName: 'France', category: 'F', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/France.jpg' },
      { id: 23, itemName: 'Finlande', category: 'F', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Finland.jpg' },
      { id: 24, itemName: 'Géorgie', category: 'G' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Georgia.jpg'},
      { id: 25, itemName: 'Grèce', category: 'G', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Greece.jpg'},
      { id: 26, itemName: 'India', category: 'I', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg' },
      { id: 27, itemName: 'Indonésie', category: 'I', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Indonesia.jpg' },
      { id: 28, itemName: 'Irak', category: 'I', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Iraq.jpg' },
      { id: 29, itemName: 'Iran', category: 'I', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Iran.jpg' },
      { id: 30, itemName: 'Irlande', category: 'I', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Ireland.jpg' },
      { id: 31, itemName: 'Islande', category: 'I' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Iceland.jpg'},
      { id: 32, itemName: 'Italie', category: 'I' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Italy.jpg'},
      { id: 33, itemName: 'Japon', category: 'j' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Japan.jpg'},
      { id: 34, itemName: 'Lebanon', category: 'L', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Lebanon.jpg' },
      { id: 35, itemName: 'Liberia', category: 'L', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Liberia.jpg' },
      { id: 36, itemName: 'Libye', category: 'L', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Libya.jpg' },
      { id: 37, itemName: 'Lituania', category: 'L', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Lithuania.jpg' },
      { id: 38, itemName: 'Luxembourg', category: 'L', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Luxembourg.jpg' },
      { id: 39, itemName: 'Maroc', category: 'M', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Morocco.jpg' },
      { id: 40, itemName: 'Mauritanie', category: 'M' , image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Mauritania.jpg'},
      { id: 41, itemName: 'Mexique', category: 'M', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Mexico.jpg' },
      { id: 42, itemName: 'Norvège', category: 'N', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Norway.jpg' },
      { id: 43, itemName: 'Nouvelle-Zélande', category: 'N', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/New_Zealand.jpg' },
      { id: 44, itemName: 'Niger', category: 'N', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Niger.jpg' },
      { id: 45, itemName: 'Nigeria', category: 'N', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Nigeria.jpg' },
      { id: 46, itemName: 'Oman', category: 'O', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Oman.jpg' },
      { id: 47, itemName: 'Pakistan', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Pakistan.jpg' },
      { id: 48, itemName: 'Palestine', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Palestine.jpg' },
      { id: 49, itemName: 'Panama', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Panama.jpg' },
      { id: 50, itemName: 'Paraguay', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Paraguay.jpg' },
      { id: 51, itemName: 'Pays-Bas', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Netherlands.jpg' },
      { id: 52, itemName: 'Pérou', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Peru.jpg' },
      { id: 53, itemName: 'Philippines', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Philippines.jpg' },
      { id: 54, itemName: 'Pologne', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Poland.jpg' },
      { id: 55, itemName: 'Portugal', category: 'P', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Portugal.jpg' },
      { id: 56, itemName: 'Qatar', category: 'Q', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Qatar.jpg' },
      { id: 57, itemName: 'République tchèque', category: 'R', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Czech_Republic.jpg' },
      { id: 58, itemName: 'Roumanie', category: 'R', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Romania.jpg' },
      { id: 59, itemName: 'Russie', category: 'R', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Russia.jpg' },
      { id: 60, itemName: 'Sénégal', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Senegal.jpg' },
      { id: 61, itemName: 'Serbie ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Serbia.jpg' },
      { id: 62, itemName: 'Singapour ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Singapore.jpg' },
      { id: 63, itemName: 'Slovaquie ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Slovakia.jpg' },
      { id: 64, itemName: 'Slovénie  ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Slovenia.jpg' },
      { id: 65, itemName: 'Soudan ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Sudan.jpg' },
      { id: 66, itemName: 'Suède ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Sweden.jpg' },
      { id: 67, itemName: 'Suisse ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Switzerland.jpg' },
      { id: 68, itemName: 'Syrie ', category: 'S', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Syria.jpg' },
      { id: 69, itemName: 'Thaïlande ', category: 'T', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Thailand.jpg' },
      { id: 70, itemName: 'Tunisie ', category: 'T', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Tunisia.jpg' },
      { id: 71, itemName: 'Turquie ', category: 'T', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Turkey.jpg' },
      { id: 72, itemName: 'Ukraine ', category: 'U', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Ukraine.jpg' },
      { id: 73, itemName: 'Uruguay ', category: 'U', image: 'http://www.sciencekids.co.nz/images/pictures/flags96/Uruguay.jpg' },

    ];


    this.settingsPays = {
      singleSelection: false,
      text: 'Pays',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      showCheckbox: true,
      // groupBy: 'category'
    };
// ----------------------------------------------
    this.criteresList = [
      { item_id: 1, item_text: 'angular' },
      { item_id: 2, item_text: 'ajax' },
      { item_id: 3, item_text: 'algorithme' },
      {item_id: 4, item_text: 'agile' },
      { item_id: 5, item_text: 'bi' },
      { item_id: 6, item_text: 'bigdata' },
      { item_id: 7, item_text: 'c#' },
      { item_id: 8, item_text: 'web' },
      { item_id: 9, item_text: 'html' },
      { item_id: 10, item_text: 'php' },
      { item_id: 11, item_text: 'css' },
      { item_id: 12, item_text: 'BOOTSTRAP' },
      { item_id: 13, item_text: 'javascript' },
      { item_id: 14, item_text: 'java' },
      { item_id: 15, item_text: 'js' },
      { item_id: 16, item_text: 'mysql' },
      { item_id: 17, item_text: 'oracle' },
      { item_id: 18, item_text: 'sqlserver' },
      { item_id: 19, item_text: 'mongodb' },
      { item_id: 20, item_text: 'spring' },
      { item_id: 21, item_text: 'springboot' },
      { item_id: 22, item_text: 'symphony' },
      { item_id: 23, item_text: 'laravel' },
      { item_id: 24, item_text: 'intelligence' },
      { item_id: 25, item_text: 'programmation' },
      { item_id: 26, item_text: 'WORDPRESS' },
      { item_id: 27, item_text: 'JOOMLA' },
      { item_id: 28, item_text: 'jee' },
      { item_id: 29, item_text: 'mvc' },
      { item_id: 30, item_text: 'scrom' },
      { item_id: 31, item_text: 'mobile' },
      { item_id: 32, item_text: 'ionic' },
      { item_id: 33, item_text: 'fluter' },
      { item_id: 34, item_text: 'kotlin' },
      { item_id: 35, item_text: 'securite' },
      { item_id: 36, item_text: 'commerce' },
      { item_id: 37, item_text: 'Photoshop' },
      { item_id: 38, item_text: 'design' },
      { item_id: 39, item_text: 'Illustrator' },
      { item_id: 40, item_text: 'dotnet core' },
      { item_id: 41, item_text: 'windev' },
      { item_id: 42, item_text: 'data mining' },
      { item_id: 43, item_text: 'rest' },
      { item_id: 44, item_text: 'soap' },
      { item_id: 44, item_text: 'jquery' },

    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

  }
  onItemSelect(item: any) {
    console.log(item.item_text);
    this.critereskey.push(item.item_text.toLowerCase());
    console.log(this.critereskey);
    // console.log(this.keyword);
    // console.log(this.keyword.indexOf(item.item_text ));

  }
  OnItemDeSelect(item: any) {
    const index = this.critereskey.indexOf(item.item_text);
    if (index > -1) {
      this.critereskey.splice(index, 1);
    }

    console.log(this.critereskey);

    console.log(this.selectedcriters);
  }
  onSelectAll(items: any) {
    this.critereskey = [];

    for (const x of items) {
    this.critereskey.push(x.item_text);
    }
    console.log(this.critereskey);
  }
  onDeSelectAll(items: any) {
    this.critereskey = [];
    console.log(this.critereskey);
  }



  onItemSelect2(item: any) {
    this.critereskey.push(item.itemName.toLowerCase());
    console.log(this.critereskey);


  }
  OnItemDeSelect2(item: any) {
    const index = this.critereskey.indexOf(item.itemName);
    if (index > -1) {
      this.critereskey.splice(index, 1);
    }

    console.log(this.critereskey);

    console.log(this.selectedcriters);
  }
  onSelectAll2(items: any) {
    this.critereskey = [];

    for (const x of items) {
      this.critereskey.push(x.itemName);
    }
    console.log(this.critereskey);
  }
  onDeSelectAll2(items: any) {
    this.critereskey = [];
    console.log(this.critereskey);  }


// Age event

onItemSelectAge(item: any) {
    const age = item.itemName.split('-');
    console.log(age);
    this.AgeMax = parseInt(age[1]);
    this.AgeMin = parseInt(age[0]);
    console.log(this.AgeMax);
    console.log(this.AgeMin);

}
OnItemDeSelectAge(item: any) {
 /* const index = this.selectedAge.indexOf(item.itemName);
  if (index > -1) {
    this.selectedAge.splice(index, 1);
  }*/

  console.log(this.selectedAge);

}
onSelectAllAge(items: any) {
  /*this.selectedAge = [];

  for (const x of items) {
    this.selectedAge.push(x.itemName);
  }*/
  console.log(this.selectedAge);
}
onDeSelectAllAge(items: any) {
 // this.selectedAge = [];
  console.log(this.selectedAge);
  }

  // Pays

  onItemSelectPays(item: any) {
    this.Pays.push(item.itemName.toLowerCase());
    console.log(this.Pays);


  }
  OnItemDeSelectPays(item: any) {
    const index = this.Pays.indexOf(item.itemName.toLowerCase());
    if (index > -1) {
      this.Pays.splice(index, 1);
    }

    console.log(this.Pays);

    console.log(this.selectedPays);
  }
  onSelectAllPays(items: any) {
    this.Pays = [];

    for (const x of items) {
      this.Pays.push(x.itemName.toLowerCase());
    }
    console.log(this.Pays);
  }
  onDeSelectAllPays(items: any) {
    this.Pays = [];
    console.log(this.Pays);  }



  search() {
    this.keyword = [];
    this.result = [];
    for (const i of this.cv) {
      this.verifpays = false;
      this.keyword = i.cv.keyword;
      console.log(this.keyword);
      if (i.cv.age) {
        this.ag = parseInt(i.cv.age.substring(0, 2));
        console.log(this.ag);
      }
      if (this.Pays.length != 0) {
        for (const p of this.Pays) {
          if (i.cv.pays.toLowerCase().indexOf(p) !== -1) {
            this.verifpays = true;
            console.log(i.cv.pays);
            break;
          }
        }


      }
      let nbr = 0;
      for (const j of this.keyword) {
        if (this.critereskey.indexOf(j) !== -1) {
          nbr++;
        }

      }
      if (this.selectedAge.length != 0 && this.Pays.length != 0) {
        if ((nbr >= Math.floor(this.critereskey.length / 2))  && (this.ag >= this.AgeMin && this.ag <= this.AgeMax) && this.verifpays) {
          this.result.push(i);
        }
      } else
        if (this.selectedAge.length != 0) {
          if ((nbr >= Math.floor(this.critereskey.length / 2))  && (this.ag >= this.AgeMin && this.ag <= this.AgeMax) ) {
            this.result.push(i);
          }
      } else
        if (this.Pays.length != 0) {
          if ((nbr >= Math.floor(this.critereskey.length / 2)) && this.verifpays) {
            this.result.push(i);
          }
        }
        else
      if ((nbr >= Math.floor(this.critereskey.length / 2))   ) {
        this.result.push(i);
      }



      console.log(nbr);

    }
    console.log(this.result);
  }
  cvpage(item) {
    localStorage.setItem('cvdata', JSON.stringify(item));
    window.open('/cv');
    // this.router.navigate(['cv']);

  }
}
