import { ExcelComponent } from "../../core/Excel.component";
export class Table extends ExcelComponent{
  static className = "table";
  constructor(node){
    super(node);
  }
  
  html() {
    return `
    <div class="t-head">
      <div class="index">N</div>
      <div class="title">
        <div class="title-block">A</div>
        <div class="title-block">B</div>
        <div class="title-block">C</div>
        <div class="title-block">A</div>
        <div class="title-block">B</div>
        <div class="title-block">C</div>
        <div class="title-block">A</div>
        <div class="title-block">B</div>
        <div class="title-block">C</div>
        <div class="title-block">B</div>
        <div class="title-block">C</div>
        <div class="title-block">A</div>
        <div class="title-block">B</div>
        <div class="title-block">C</div>
        <div class="title-block">D</div>
        <div class="title-block">F</div>
        <div class="title-block">G</div>
      </div>
    </div>
    <div class="t-main">
      <div class="index">1</div>
      <div class="title">
        <div class="title-block">sdfgsdgAsdfg</div>
        <div class="title-block">Bsdfgsdgs</div>
        <div class="title-block">Csgsdgs</div>
        <div class="title-block">sdfgsdgsdA</div>
        <div class="title-block">sdfgsdgB</div>
        <div class="title-block">Cdsgsdfg</div>
        <div class="title-block">xcvbxbA</div>
        <div class="title-block">Bsdfgsg</div>
        <div class="title-block">sdfgfsdgC</div>
        <div class="title-block">sfgsgB</div>
        <div class="title-block">sdfgsgC</div>
        <div class="title-block">Afsdgs</div>
        <div class="title-block">sdfgsgB</div>
        <div class="title-block">sdfgsdgsC</div>
      </div>
    </div>
    `;
  }
}
