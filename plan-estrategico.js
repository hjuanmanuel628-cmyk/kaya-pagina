/* ==========================================================================
   DATOS Y LÓGICA DEL VISOR DE DIAPOSITIVAS «PLAN ESTRATÉGICO» (FASES 1, 2 Y 3)
   Fuente única: «Plan_Estrategico_Cacay_Fase_3_final» (versión en dólares)
   ========================================================================== */

const STRATEGIC_PHASES = {
  1: {
    id: 1,
    shortTitle: "Fase 1 · Diagnóstico",
    fullTitle: "Fase 1 · Diagnóstico del producto",
    objective: "Mostrar por qué Colombia necesita diversificar, por qué elegimos el aceite de cacay y dónde está hoy el país dentro de su cadena de valor.",
    slides: [
      {
        code: "DIAPOSITIVA 1.1",
        indexTitle: "1.1 Portada de la Fase 1",
        title: "Fase 1 · Diagnóstico: el aceite de cacay colombiano",
        keyMessage: "De exportar un ingrediente a exportar un producto con marca.",
        isCover: true,
        source: "Taller «Plan Estratégico de Inserción Internacional de Colombia» · Universidad Libre, seccional Pereira (Noviembre de 2026).",
        html: `
          <div style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap:28px; align-items:center;">
            <div>
              <p style="font-size:1.3rem; color:#8FB8A3; font-weight:700; margin-bottom:14px;">
                Sector: bioeconomía aplicada a la cosmética natural
              </p>
              <blockquote style="font-family:var(--pe-serif); font-size:2rem; font-style:italic; line-height:1.35; padding:20px 24px; background:rgba(255,255,255,0.08); border-left:4px solid #8FB8A3; border-radius:8px;">
                «La idea de fondo no es vender más aceite. Es subir en la cadena».
              </blockquote>
              <p style="margin-top:18px; font-size:0.98rem; color:rgba(255,255,255,0.85);">
                <strong>Integrantes:</strong> Juan Manuel Hernández, Angie Ochoa y Juan José Gómez<br/>
                <strong>Docente:</strong> Lindy Neth Perea Mosquera · Entorno Económico Internacional
              </p>
            </div>
            <div style="border-radius:14px; overflow:hidden; border:2px solid #8FB8A3; box-shadow:0 16px 36px rgba(0,0,0,0.35);">
              <img src="assets/images/cacay-fruto.jpg" alt="Fruto y nuez de cacay" style="width:100%; height:300px; object-fit:cover; display:block;" />
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.2",
        indexTitle: "1.2 El problema: dependencia del subsuelo",
        title: "El problema: un país que depende del subsuelo",
        keyMessage: "Casi 4 de cada 10 dólares exportados vienen de combustibles e industrias extractivas.",
        source: "DANE, citado por Analdex (2025); Analdex (2026).",
        html: `
          <p style="margin-bottom:4px; font-weight:600;">Estructura de las exportaciones colombianas, enero a octubre de 2025:</p>
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Grupo</th><th>Participación</th></tr>
              </thead>
              <tbody>
                <tr><td>Combustibles e industrias extractivas</td><td>38,9 %</td></tr>
                <tr><td>Agropecuarios, alimentos y bebidas</td><td>30,5 %</td></tr>
                <tr><td>Manufacturas</td><td>21,9 %</td></tr>
                <tr><td>Resto (cálculo: 100 % − suma anterior)</td><td>8,7 %</td></tr>
              </tbody>
            </table>
          </div>
          <div class="pe-kpi-grid">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">−13,6 %</span>
              <span class="pe-kpi-lbl">caída de las ventas minero-energéticas en 2025</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">+20 %</span>
              <span class="pe-kpi-lbl">crecimiento de la canasta no minero-energética en 2025</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 26.395,9 M</span>
              <span class="pe-kpi-lbl">exportaciones no minero-energéticas en 2025</span>
            </div>
          </div>
          <div class="pe-chart-box">
            <div class="pe-stacked-bar-labels">
              <span><strong>Combustibles e industrias extractivas:</strong> 38,9 %</span>
              <span><strong>Agropecuarios, alimentos y bebidas:</strong> 30,5 %</span>
              <span><strong>Manufacturas:</strong> 21,9 %</span>
              <span><strong>Resto:</strong> 8,7 %</span>
            </div>
            <div class="pe-stacked-bar">
              <div class="pe-stacked-seg" style="width:38.9%; background:#1F4E3D;" title="Combustibles e industrias extractivas: 38,9 %">38,9 %</div>
              <div class="pe-stacked-seg" style="width:30.5%; background:#3E7A62;" title="Agropecuarios, alimentos y bebidas: 30,5 %">30,5 %</div>
              <div class="pe-stacked-seg" style="width:21.9%; background:#8FB8A3; color:#1A2420;" title="Manufacturas: 21,9 %">21,9 %</div>
              <div class="pe-stacked-seg" style="width:8.7%; background:#D9DFDC; color:#1A2420;" title="Resto: 8,7 %">8,7 %</div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.3",
        indexTitle: "1.3 Sector estratégico: bioeconomía",
        title: "Sector estratégico: bioeconomía",
        keyMessage: "Colombia tiene la biodiversidad y la industria para transformarla.",
        source: "ProColombia (2016), con datos del SiB Colombia; ANDI (2026); ProColombia (s. f.).",
        html: `
          <p><strong>Definición:</strong> uso de recursos biológicos renovables, con conocimiento científico y procesos industriales, para producir bienes de mayor valor que la materia prima de la que parten.</p>
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:16px;">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">2.º</span>
              <span class="pe-kpi-lbl">país del mundo en diversidad de plantas</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">3.º</span>
              <span class="pe-kpi-lbl">en diversidad de palmas</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">311</span>
              <span class="pe-kpi-lbl">tipos de ecosistemas continentales y costeros</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">1,61 %</span>
              <span class="pe-kpi-lbl">del PIB aportó la industria de cosméticos, cuidado personal y aseo en 2025</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">61.300+</span>
              <span class="pe-kpi-lbl">personas empleadas por esa industria</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">12</span>
              <span class="pe-kpi-lbl">ingredientes en el portafolio BIO IN de ProColombia, entre ellos el cacay</span>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.4",
        indexTitle: "1.4 El producto: aceite de cacay",
        title: "El producto: aceite de cacay",
        keyMessage: "Una nuez amazónica que pasó de ser leña a ingrediente antiedad.",
        source: "Tacay Natural Oils (s. f.); Kahai (2024); Mi Cosmética Casera (s. f.); Kahai en ProColombia B2B Marketplace (s. f.); CaryO (2026).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Característica</th><th>Descripción</th></tr>
              </thead>
              <tbody>
                <tr><td>Nombre científico</td><td><em>Caryodendron orinocense</em> (familia Euphorbiaceae)</td></tr>
                <tr><td>Distribución</td><td>Amazonía y Orinoquía colombianas; piedemonte oriental desde Putumayo hasta Arauca</td></tr>
                <tr><td>Parte usada y extracción</td><td>Nuez (almendra), prensada en frío</td></tr>
                <tr><td>Composición de la nuez</td><td>18,32 % de proteína, 52,5 % de grasa y 3,14 % de fibra cruda (Tacay, s. f.)</td></tr>
                <tr><td>Composición del aceite</td><td>63,17 % de omega 6, 27,99 % de omega 9, 2,9 % de omega 3 y retinol natural (Tacay, s. f.). Un análisis de lote reporta 72,7 % de ácido linoleico, 9,3 % de oleico y 8,6 % de palmítico (Mi Cosmética Casera, s. f.)</td></tr>
                <tr><td>Subproducto</td><td>Torta con 32,56 % de proteína y 527 mg de calcio por 100 g (Tacay, s. f.)</td></tr>
                <tr><td>Características sensoriales</td><td>Absorción rápida, efecto seco (no grasoso) y aroma suave a nuez</td></tr>
                <tr><td>Certificaciones reportadas</td><td>COSMOS y ECOCERT Natural (Kahai); NATRUE (CaryO); USDA Organic y Rainforest Alliance según un distribuidor colombiano</td></tr>
                <tr><td>Usos</td><td>Cosmética antiedad, hidratación, cabello, uñas y estrías; la nuez y la harina también tienen uso alimentario</td></tr>
              </tbody>
            </table>
          </div>
          <div class="pe-chart-box">
            <div class="pe-chart-title">Perfil de ácidos grasos del aceite de cacay (Tacay, s. f.; «resto 5,94 %» cálculo propio: 100 % menos suma de omegas)</div>
            <div class="pe-stacked-bar">
              <div class="pe-stacked-seg" style="width:63.17%; background:#1F4E3D;" title="Omega 6: 63,17 %">Omega 6: 63,17 %</div>
              <div class="pe-stacked-seg" style="width:27.99%; background:#3E7A62;" title="Omega 9: 27,99 %">Omega 9: 27,99 %</div>
              <div class="pe-stacked-seg" style="width:2.9%; background:#8FB8A3; color:#1A2420; font-size:0.75rem;" title="Omega 3: 2,9 %">2,9%</div>
              <div class="pe-stacked-seg" style="width:5.94%; background:#D9DFDC; color:#1A2420; font-size:0.75rem;" title="Resto (cálculo propio): 5,94 %">5,94%</div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.5",
        indexTitle: "1.5 Seis factores de diferenciación",
        title: "No es un producto sin diferenciación",
        keyMessage: "Seis factores lo alejan de un commodity.",
        source: "Tabla 2 del documento: CaryO (2026), Semana (2020), ProColombia (2014, 2019, 2022).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Factor</th><th>Qué significa en nuestra propuesta</th><th>Evidencia</th></tr>
              </thead>
              <tbody>
                <tr><td>⚙️ Procesamiento</td><td>Prensado en frío, filtrado, envasado en vidrio y formulación del sérum</td><td>Las exportadoras ya prensan en frío y venden aceite de grado cosmético (CaryO, 2026)</td></tr>
                <tr><td>🗺️ Origen y marca</td><td>Amazonía y Orinoquía, con una historia de comunidades y selva</td><td>La industria busca productos con historia e impacto (Semana, 2020)</td></tr>
                <tr><td>🏅 Certificaciones</td><td>Cosmética natural y orgánica con trazabilidad</td><td>COSMOS, ECOCERT Natural y NATRUE (Kahai; CaryO, 2026)</td></tr>
                <tr><td>🧪 Ciencia</td><td>Perfil bioactivo documentado y estudios independientes</td><td>Estudio con laboratorio alemán en 2012 (ProColombia, 2014)</td></tr>
                <tr><td>🌿 Sostenibilidad</td><td>Recolección silvestre y cultivo en zonas deforestadas</td><td>Más de 200 familias vinculadas según Kahai; alternativa a cultivos ilícitos (ProColombia, 2019)</td></tr>
                <tr><td>✨ Nicho</td><td>Cuidado facial antiedad de piel madura</td><td>El cuidado de la piel fue el 29,3 % de la cosmética mundial en 2021 (ProColombia, 2022)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.6",
        indexTitle: "1.6 Un mercado mundial que crece",
        title: "Un mercado mundial que crece",
        keyMessage: "La cosmética natural pasaría de USD 41.300 millones a USD 70.800 millones en diez años.",
        source: "Global Market Insights (2026); ANDI (2026).",
        html: `
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 41.300 M</span>
              <span class="pe-kpi-lbl">mercado mundial de cosméticos naturales, 2025</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 70.800 M</span>
              <span class="pe-kpi-lbl">proyección para 2035</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 6.861 M</span>
              <span class="pe-kpi-lbl">facturó la industria cosmética colombiana en 2025</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 1.104 M</span>
              <span class="pe-kpi-lbl">exportó esa industria en 2025 (+11,1 %)</span>
            </div>
          </div>
          <div class="pe-chart-box">
            <div class="pe-chart-title">Mercado mundial de cosméticos naturales: 2025 frente a 2035</div>
            <div class="pe-vbar-chart" style="max-width:480px; margin:0 auto;">
              <div class="pe-vbar-col">
                <span class="pe-vbar-num">USD 41,3 mil millones</span>
                <div class="pe-vbar-rect" style="height:58%; max-width:130px;"></div>
                <span class="pe-vbar-year">2025</span>
              </div>
              <div class="pe-vbar-col">
                <span class="pe-vbar-num">USD 70,8 mil millones</span>
                <div class="pe-vbar-rect highlight" style="height:100%; max-width:130px;"></div>
                <span class="pe-vbar-year">2035 (proyección)</span>
              </div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.7",
        indexTitle: "1.7 ¿Se exporta hoy? Invisible en cifras",
        title: "¿Se exporta hoy? Sí, pero es invisible en las cifras",
        keyMessage: "Toda la categoría de ingredientes naturales para cosmética sumó apenas USD 5,6 millones en 2021.",
        source: "DANE, cálculos de ProColombia (2022); Kahai (2018); ProColombia (2016).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Año</th><th>2014</th><th>2015</th><th>2016</th><th>2017</th><th>2018</th><th>2019</th><th>2020</th><th>2021</th></tr>
              </thead>
              <tbody>
                <tr><td>USD millones</td><td>2,3</td><td>1,8</td><td>1,7</td><td>1,3</td><td>1,6</td><td>2,4</td><td><strong>6,9</strong></td><td><strong>5,6</strong></td></tr>
              </tbody>
            </table>
          </div>
          <div class="pe-chart-box">
            <div class="pe-chart-title">Gráfico 1: Exportaciones de ingredientes naturales para cosmética (USD millones, 2014–2021) — Salto de 2020 explicado en gran parte por extractos de cannabis</div>
            <div class="pe-vbar-chart">
              <div class="pe-vbar-col"><span class="pe-vbar-num">2,3</span><div class="pe-vbar-rect" style="height:33%;"></div><span class="pe-vbar-year">2014</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">1,8</span><div class="pe-vbar-rect" style="height:26%;"></div><span class="pe-vbar-year">2015</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">1,7</span><div class="pe-vbar-rect" style="height:25%;"></div><span class="pe-vbar-year">2016</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">1,3</span><div class="pe-vbar-rect" style="height:19%;"></div><span class="pe-vbar-year">2017</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">1,6</span><div class="pe-vbar-rect" style="height:23%;"></div><span class="pe-vbar-year">2018</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">2,4</span><div class="pe-vbar-rect" style="height:35%;"></div><span class="pe-vbar-year">2019</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">6,9</span><div class="pe-vbar-rect highlight" style="height:100%;"></div><span class="pe-vbar-year">2020</span></div>
              <div class="pe-vbar-col"><span class="pe-vbar-num">5,6</span><div class="pe-vbar-rect highlight" style="height:81%;"></div><span class="pe-vbar-year">2021</span></div>
            </div>
          </div>
          <ul style="padding-left:22px; font-size:0.95rem; display:grid; gap:6px;">
            <li>El salto de 2020 se explica sobre todo por los extractos de cannabis (ProColombia, 2022).</li>
            <li>En 2021: otros jugos y extractos vegetales fueron el 47 % (USD 2,6 M), extracto de soya el 26,3 % (USD 1,5 M) y colorantes vegetales el 5,6 %. El cacay ni siquiera aparece.</li>
            <li>El cacay no tiene subpartida arancelaria propia: se clasifica entre grasas y aceites vegetales fijos y preparaciones capilares (Kahai, 2018).</li>
            <li>Grasas y aceites fue el segmento de ingredientes naturales que más creció entre 2010 y 2015: 58,4 % promedio anual (ProColombia, 2016).</li>
          </ul>
        `
      },
      {
        code: "DIAPOSITIVA 1.8",
        indexTitle: "1.8 La cadena de valor",
        title: "La cadena de valor: Colombia se queda en la mitad",
        keyMessage: "Exportamos en los eslabones 2 y 3; el precio final se define en el 4 y el 5, fuera del país.",
        source: "Tabla 3: Semana (2020), ProColombia (2014, 2019), páginas de las empresas; cálculos propios con ProColombia (2022): USD 5,6 M frente a USD 19.600 M; USD 478,5 M frente a USD 5,6 M; USD 137.000 M frente a USD 19.600 M.",
        html: `
          <div class="pe-chain-grid">
            <div class="pe-chain-step">
              <span class="pe-chain-tag" style="background:#3E7A62;">Eslabón 1</span>
              <h4 style="color:#1F4E3D; margin-bottom:4px;">1. Recolección y cultivo</h4>
              <p style="font-size:0.85rem;"><strong>Producto:</strong> Fruto y nuez de cacay.<br/><strong>Hoy:</strong> Familias campesinas e indígenas (Meta y Amazonía).<br/><em>Materia prima</em></p>
            </div>
            <div class="pe-chain-step colombia-here">
              <span class="pe-chain-tag">Aquí está Colombia</span>
              <h4 style="color:#1F4E3D; margin-bottom:4px;">2. Extracción</h4>
              <p style="font-size:0.85rem;"><strong>Producto:</strong> Aceite prensado en frío y harina.<br/><strong>Hoy:</strong> Kahai, CaryO, Tacay y otras.<br/><em>Semitransformado (ingrediente)</em></p>
            </div>
            <div class="pe-chain-step colombia-here">
              <span class="pe-chain-tag">Aquí está Colombia</span>
              <h4 style="color:#1F4E3D; margin-bottom:4px;">3. Comercialización</h4>
              <p style="font-size:0.85rem;"><strong>Producto:</strong> Aceite cosmético certificado.<br/><strong>Hoy:</strong> Exportadores colombianos y comercializadores.<br/><em>Semitransformado</em></p>
            </div>
            <div class="pe-chain-step price-here">
              <span class="pe-chain-tag">Aquí se define el precio</span>
              <h4 style="color:#333; margin-bottom:4px;">4. Formulación</h4>
              <p style="font-size:0.85rem;"><strong>Producto:</strong> Sérum, crema, champú.<br/><strong>Hoy:</strong> Marcas y laboratorios del exterior.<br/><em>Transformado</em></p>
            </div>
            <div class="pe-chain-step price-here">
              <span class="pe-chain-tag">Aquí se define el precio</span>
              <h4 style="color:#333; margin-bottom:4px;">5. Marca y distribución</h4>
              <p style="font-size:0.85rem;"><strong>Producto:</strong> Producto final en góndola.<br/><strong>Hoy:</strong> Marcas del exterior, con algunas excepciones.<br/><em>Producto final con marca</em></p>
            </div>
          </div>
          <div class="pe-kpi-grid">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">0,03 %</span>
              <span class="pe-kpi-lbl">del comercio mundial de ingredientes naturales es colombiano (2021, cálculo propio)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">85 a 1</span>
              <span class="pe-kpi-lbl">dólares en cosméticos terminados por cada dólar en ingredientes naturales en Colombia</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">7 a 1</span>
              <span class="pe-kpi-lbl">esa misma relación en el mundo</span>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 1.9",
        indexTitle: "1.9 Nivel de valor agregado",
        title: "Nivel de valor agregado: medio-bajo",
        keyMessage: "El mismo aceite vale unos 653 € por litro en una tienda y hasta USD 6.760 por litro en una crema de salón.",
        source: "Mi Cosmética Casera (s. f.); Kahai (2024); ProColombia (2014, 2016, 2022); Kahai en ProColombia B2B Marketplace (s. f.); Tacay (s. f.).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Punto de la cadena</th><th>Precio</th><th>Equivalente por litro</th></tr>
              </thead>
              <tbody>
                <tr><td>Aceite en frasco de 50 ml (tienda española de materias primas)</td><td>32,65 €</td><td>≈ 653 €</td></tr>
                <tr><td>Aceite en frasco de 30 ml (misma tienda)</td><td>20,72 €</td><td>≈ 691 € (cálculo propio)</td></tr>
                <tr><td>Aceite en frasco de 10 ml (misma tienda)</td><td>9,30 €</td><td>≈ 930 €</td></tr>
                <tr class="pe-highlight-row"><td>Crema antiedad con cacay en salones de Los Ángeles y Londres</td><td>USD 200 por onza</td><td>≈ USD 6.760 (cálculo propio)</td></tr>
              </tbody>
            </table>
          </div>
          <div class="pe-chart-box">
            <div class="pe-chart-title">Gráfico 2 del documento: Escalera de precios por litro</div>
            <div class="pe-hbar-list">
              <div class="pe-hbar-row">
                <div class="pe-hbar-label">Aceite en frasco de 50 ml (tienda España)</div>
                <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:12%;"></div></div>
                <div class="pe-hbar-val">≈ 653 € / litro</div>
              </div>
              <div class="pe-hbar-row">
                <div class="pe-hbar-label">Aceite en frasco de 10 ml (misma tienda)</div>
                <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:17%;"></div></div>
                <div class="pe-hbar-val">≈ 930 € / litro</div>
              </div>
              <div class="pe-hbar-row">
                <div class="pe-hbar-label">Crema o sérum de marca premium (USD 200/onza)</div>
                <div class="pe-hbar-track"><div class="pe-hbar-fill highlight" style="width:100%;"></div></div>
                <div class="pe-hbar-val">≈ USD 6.760 / litro</div>
              </div>
            </div>
          </div>
          <ul style="padding-left:22px; font-size:0.93rem; display:grid; gap:5px;">
            <li>En 2015 la UE importó USD 5.372 M en ingredientes naturales (36,3 % del mundo) y Colombia le vendió solo USD 18.293: el 0,001 % (ProColombia, 2016).</li>
            <li>Principales exportadores mundiales en 2021: India 14,7 %, China 14,6 % y Estados Unidos 10,2 % (ProColombia, 2022).</li>
            <li>Competidores directos: argán (Marruecos) y rosa mosqueta (Chile). Según las empresas de cacay, este tendría 50 % más vitamina E y el doble de ácido linoleico que el argán, y el triple de retinol que la rosa mosqueta (afirmaciones por verificar).</li>
          </ul>
        `
      },
      {
        code: "DIAPOSITIVA 1.10",
        indexTitle: "1.10 Mercados y conclusión Fase 1",
        title: "Mercados y conclusión de la Fase 1",
        keyMessage: "El cacay llega a mercados de alto ingreso; la industria cosmética colombiana, a Latinoamérica.",
        source: "ProColombia (2014, 2019, 2022, 2026); CaryO (2026).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Fuente y año</th><th>Destinos reportados del aceite de cacay</th></tr>
              </thead>
              <tbody>
                <tr><td>ProColombia (2014), sobre Kahai</td><td>Alemania, Estados Unidos, Corea del Sur, Tailandia y Reino Unido; un cliente en España</td></tr>
                <tr><td>ProColombia (2019), sobre Kahai</td><td>Estados Unidos, Alemania, Suiza, Francia, Corea, Japón, Australia y Tailandia; interés en China y Rusia</td></tr>
                <tr><td>CaryO (2026)</td><td>Más de 10 países, sin detallarlos</td></tr>
              </tbody>
            </table>
          </div>
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Ingredientes naturales para cosmética, 2021</th><th>%</th><th>Cosméticos y aseo terminados, 2021</th><th>%</th></tr>
              </thead>
              <tbody>
                <tr><td>Austria</td><td>26,4</td><td><strong>Perú</strong></td><td>24,1</td></tr>
                <tr><td>Reino Unido</td><td>12,0</td><td><strong>México</strong></td><td>17,8</td></tr>
                <tr><td>México</td><td>9,5</td><td><strong>Ecuador</strong></td><td>17,4</td></tr>
                <tr><td>Estados Unidos</td><td>9,3</td><td><strong>Chile</strong></td><td>9,5</td></tr>
                <tr><td>Panamá</td><td>5,1</td><td><strong>Estados Unidos</strong></td><td>4,5</td></tr>
                <tr><td>Brasil</td><td>5,0</td><td><strong>Rep. Dominicana</strong></td><td>3,6</td></tr>
                <tr><td>Argentina</td><td>4,7</td><td><strong>Panamá</strong></td><td>3,5</td></tr>
                <tr><td>Ecuador</td><td>4,4</td><td><strong>Costa Rica</strong></td><td>3,4</td></tr>
                <tr><td>Rep. Dominicana</td><td>3,3</td><td><strong>Guatemala</strong></td><td>2,7</td></tr>
              </tbody>
            </table>
          </div>
          <p style="background:#F5F8F6; border-left:5px solid #1F4E3D; padding:12px 16px; border-radius:6px; font-size:0.96rem;">
            <strong>Conclusión:</strong> el cacay es un ingrediente con reputación, compradores en Europa, Estados Unidos y Asia y precios altos al final de la cadena, pero Colombia captura muy poco de ese valor: lo exporta en cantidades mínimas y casi nunca como producto terminado.
          </p>
        `
      },
      {
        code: "DIAPOSITIVA 1.11",
        indexTitle: "1.11 Referencias de la Fase 1",
        title: "Referencias de la Fase 1",
        keyMessage: "Última diapositiva de la fase: lista APA 7 en letra pequeña, con enlaces activos.",
        source: "Formato APA 7 — Fase 1.",
        html: `
          <div class="pe-ref-list">
            <ol>
              <li>Analdex. (2025, 15 de diciembre). <em>Exportaciones de Colombia, octubre de 2025</em> (informe mensual con datos del DANE). <a href="https://analdex.org/2025/12/15/exportaciones-de-colombia-octubre-2025/" target="_blank" rel="noopener">https://analdex.org/2025/12/15/exportaciones-de-colombia-octubre-2025/</a></li>
              <li>Analdex. (2026, 4 de febrero). <em>Exportaciones de Colombia 2025</em> (informe mensual con datos del DANE). <a href="https://analdex.org/2026/02/04/exportaciones-de-colombia-2025/" target="_blank" rel="noopener">https://analdex.org/2026/02/04/exportaciones-de-colombia-2025/</a></li>
              <li>ANDI, Cámara de la Industria Cosmética y de Aseo. (2026, mayo). <em>Industria cosmética y de aseo doméstico: un motor de USD 6.800 millones impulsado por las exportaciones y la innovación</em>. <a href="https://www.andi.com.co/Home/Noticia/18027-industria-cosmetica-y-de-aseo-domestico" target="_blank" rel="noopener">https://www.andi.com.co/Home/Noticia/18027-industria-cosmetica-y-de-aseo-domestico</a></li>
              <li>CaryO. (2026). <em>CaryO: liderazgo científico y sostenible en aceite de cacay para la industria cosmética</em>. <a href="https://caryo.co/blogs/news/caryo-y-la-promesa-de-unir-amazonia-ciencia-skincare-y-bienestar" target="_blank" rel="noopener">https://caryo.co/blogs/news/caryo-y-la-promesa-de-unir-amazonia-ciencia-skincare-y-bienestar</a></li>
              <li>Global Market Insights. (2026). <em>Tamaño y pronóstico del mercado de cosméticos naturales (2026-2035)</em>. <a href="https://www.gminsights.com/es/industry-analysis/natural-cosmetics-market" target="_blank" rel="noopener">https://www.gminsights.com/es/industry-analysis/natural-cosmetics-market</a></li>
              <li>Kahai. (2018, 30 de octubre). <em>El cacay, la nuez de moda que construye paz</em>. <a href="https://kahai.co/2018/10/30/el-cacay-la-nuez-de-moda-que-construye-paz/" target="_blank" rel="noopener">https://kahai.co/2018/10/30/el-cacay-la-nuez-de-moda-que-construye-paz/</a></li>
              <li>Kahai. (2024, 3 de julio). <em>Cacay: la nuez de la belleza que causa furor</em>. <a href="https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/" target="_blank" rel="noopener">https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/</a></li>
              <li>Mi Cosmética Casera. (s. f.). <em>Aceite de cacay 1.ª presión en frío BIO</em> (ficha de producto). <a href="https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/" target="_blank" rel="noopener">https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/</a></li>
              <li>Mordor Intelligence. (2026). <em>Informe de análisis del tamaño del mercado de productos cosméticos, crecimiento y participación en 2031</em>. <a href="https://www.mordorintelligence.ar/industry-reports/global-cosmetic-products-industry" target="_blank" rel="noopener">https://www.mordorintelligence.ar/industry-reports/global-cosmetic-products-industry</a></li>
              <li>ProColombia. (2014, 6 de noviembre). <em>Cacay, la nuez colombiana para cosméticos que fascina al mundo</em>. <a href="https://procolombia.co/colombiatrade/exportador/articulos/cacay-la-nuez-colombiana-para-cosmeticos-que-fascina-al-mundo" target="_blank" rel="noopener">https://procolombia.co/colombiatrade/exportador/articulos/cacay-la-nuez-colombiana-para-cosmeticos-que-fascina-al-mundo</a></li>
              <li>ProColombia. (2016, agosto). <em>Ingredientes naturales en el sector cosmético</em> (presentación). <a href="https://unctad.org/meetings/en/Presentation/ditc-ted-16082016-colombia-3-Procolombia.pdf" target="_blank" rel="noopener">https://unctad.org/meetings/en/Presentation/ditc-ted-16082016-colombia-3-Procolombia.pdf</a></li>
              <li>ProColombia. (2019, 10 de abril). <em>Ingredientes naturales colombianos con los ojos puestos en conquistar el mercado</em>. <a href="https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado" target="_blank" rel="noopener">https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado</a></li>
              <li>ProColombia. (2022). <em>Oportunidades para ingredientes naturales y productos cosméticos en la Unión Europea y Suiza</em> (presentación). <a href="https://gqspcolombia.org/fase1-quimicos/wp-content/uploads/2022/12/PPT_ingredientes_naturales_EUROPA-1.pdf" target="_blank" rel="noopener">https://gqspcolombia.org/fase1-quimicos/wp-content/uploads/2022/12/PPT_ingredientes_naturales_EUROPA-1.pdf</a></li>
              <li>ProColombia. (2026, 20 de agosto). <em>Rueda de Negocios de ProColombia en la Feria de Belleza y Salud dejó negocios y expectativas por más de USD 1,7 millones</em>. <a href="https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones" target="_blank" rel="noopener">https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones</a></li>
              <li>ProColombia. (s. f.). <em>12 ingredientes naturales para el sector cosmético</em>. <a href="https://procolombia.co/sala-de-prensa/noticias/12-ingredientes-naturales-para-el-sector-cosmetico" target="_blank" rel="noopener">https://procolombia.co/sala-de-prensa/noticias/12-ingredientes-naturales-para-el-sector-cosmetico</a></li>
              <li>ProColombia. (s. f.). <em>Aceite de cacay, Kahai SAS</em>. Colombian B2B Marketplace. <a href="https://b2bmarketplace.procolombia.co/es/salud-y-belleza/cosmeticos-naturales/aceite-de-cacay-13025" target="_blank" rel="noopener">https://b2bmarketplace.procolombia.co/es/salud-y-belleza/cosmeticos-naturales/aceite-de-cacay-13025</a></li>
              <li>Redalyc. (s. f.). <em>Caracterización de la diversidad genética de Caryodendron orinocense con marcadores RAMs</em>. <a href="https://www.redalyc.org/pdf/776/77639196007.pdf" target="_blank" rel="noopener">https://www.redalyc.org/pdf/776/77639196007.pdf</a></li>
              <li>Semana. (2020, 1 de diciembre). <em>Historia de Kahai que exportan nuez cacay en Colombia</em>. <a href="https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/" target="_blank" rel="noopener">https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/</a></li>
              <li>Tacay Natural Oils. (2025). <em>Árboles de cacay</em>. <a href="https://tacay.co/arboles-de-cacay/" target="_blank" rel="noopener">https://tacay.co/arboles-de-cacay/</a></li>
              <li>Tacay Natural Oils. (s. f.). <em>Aceite de cacay 1 litro</em> (ficha de producto). <a href="https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/" target="_blank" rel="noopener">https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/</a></li>
              <li>Valora Analitik. (2026, 19 de mayo). <em>Industria cosmética en Colombia: récord exportador en 2025</em>. <a href="https://www.valoraanalitik.com/industria-cosmetica-colombia-record-2025/" target="_blank" rel="noopener">https://www.valoraanalitik.com/industria-cosmetica-colombia-record-2025/</a></li>
            </ol>
          </div>
        `
      }
    ]
  },

  2: {
    id: 2,
    shortTitle: "Fase 2 · Estrategia",
    fullTitle: "Fase 2 · Plan estratégico de inserción",
    objective: "Pasar del diagnóstico a la estrategia (DOFA, acuerdos comerciales, mercados, competencia, entrada, portafolio y hoja de ruta).",
    slides: [
      {
        code: "DIAPOSITIVA 2.1",
        indexTitle: "2.1 Portada y marco teórico",
        title: "Fase 2 · Estrategia y marco teórico",
        keyMessage: "La brecha del cacay no es nueva: la teoría económica la explica desde 1950.",
        isCover: false,
        source: "Prebisch (1950); Singer (1950); Corden y Neary (1982); Gereffi, Humphrey y Sturgeon (2005); Hidalgo y Hausmann (2009).",
        html: `
          <div style="background:#1F4E3D; color:#fff; padding:18px 24px; border-radius:12px;">
            <strong style="color:#8FB8A3; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.12em;">Objetivo de la Fase 2</strong>
            <p style="margin-top:4px; font-size:1.05rem;">Pasar del diagnóstico a la estrategia: DOFA, acuerdos comerciales, mercados, competencia, entrada, portafolio y hoja de ruta.</p>
          </div>
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Autor</th><th>Idea</th><th>Cómo se aplica al cacay</th></tr>
              </thead>
              <tbody>
                <tr><td>Prebisch (1950) y Singer (1950)</td><td>Las materias primas tienden a perder valor frente a las manufacturas</td><td>Exportar solo el aceite nos deja en la parte que menos gana</td></tr>
                <tr><td>Corden y Neary (1982)</td><td>Un sector exportador en auge puede desplazar a los demás</td><td>La dependencia minero-energética frena otros sectores</td></tr>
                <tr><td>Gereffi, Humphrey y Sturgeon (2005)</td><td>Lo decisivo es en qué eslabón de la cadena global está cada país</td><td>Hay que subir del eslabón 2–3 al 4–5</td></tr>
                <tr><td>Hidalgo y Hausmann (2009)</td><td>Diversificar exige capacidades reutilizables</td><td>Apoyarse en la industria cosmética colombiana para formular</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.2",
        indexTitle: "2.2 Matriz DOFA",
        title: "Matriz DOFA",
        keyMessage: "Ventajas reales, pero Colombia se queda en los eslabones donde menos se gana.",
        source: "Tabla 6: Mi Cosmética Casera (s. f.); Tacay (s. f.); ANDI (2026); Semana (2020); ProColombia (2014, 2016, 2019, 2022, s. f.); Kahai (2018); Global Market Insights (2026); Team France Export (s. f.); Analdex (2026).",
        html: `
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background:#F5F8F6; border:2px solid #1F4E3D; border-radius:12px; padding:18px 20px;">
              <h4 style="background:#1F4E3D; color:#fff; padding:8px 14px; border-radius:6px; margin-bottom:12px;">Fortalezas (F)</h4>
              <ol style="padding-left:20px; font-size:0.94rem; display:grid; gap:6px;">
                <li>Perfil bioactivo: 72,7 % de ácido linoleico, vitamina E y retinol natural.</li>
                <li>Industria cosmética exportadora: USD 1.104 M en 2025.</li>
                <li>Narrativa de sostenibilidad: más de 200 familias y alternativa a cultivos ilícitos.</li>
                <li>Antecedentes exportadores y cacay en el portafolio BIO IN.</li>
              </ol>
            </div>
            <div style="background:#F4F6F5; border:2px solid #8FB8A3; border-radius:12px; padding:18px 20px;">
              <h4 style="background:#3E7A62; color:#fff; padding:8px 14px; border-radius:6px; margin-bottom:12px;">Debilidades (D)</h4>
              <ol style="padding-left:20px; font-size:0.94rem; display:grid; gap:6px;">
                <li>Bajo valor agregado: se exporta como ingrediente.</li>
                <li>Base exportadora frágil: 0,03 % del comercio mundial.</li>
                <li>Sin subpartida arancelaria propia.</li>
                <li>Composición variable entre lotes y estudios de eficacia pendientes.</li>
              </ol>
            </div>
            <div style="background:#F5F8F6; border:2px solid #1F4E3D; border-radius:12px; padding:18px 20px;">
              <h4 style="background:#1F4E3D; color:#fff; padding:8px 14px; border-radius:6px; margin-bottom:12px;">Oportunidades (O)</h4>
              <ol style="padding-left:20px; font-size:0.94rem; display:grid; gap:6px;">
                <li>Cosmética natural: de USD 41.300 M (2025) a USD 70.800 M (2035).</li>
                <li>La UE concentra el 36,3 % de las importaciones de ingredientes naturales; Colombia le vendió USD 18.293 en 2015.</li>
                <li>Tendencia clean beauty premium.</li>
                <li>TLC vigentes con la UE, el Reino Unido y EE. UU.</li>
              </ol>
            </div>
            <div style="background:#F4F6F5; border:2px solid #8FB8A3; border-radius:12px; padding:18px 20px;">
              <h4 style="background:#3E7A62; color:#fff; padding:8px 14px; border-radius:6px; margin-bottom:12px;">Amenazas (A)</h4>
              <ol style="padding-left:20px; font-size:0.94rem; display:grid; gap:6px;">
                <li>Competidores consolidados: argán (Marruecos) y rosa mosqueta (Chile).</li>
                <li>Barreras normativas (Reglamento 1223/2009, MoCRA) y certificaciones costosas.</li>
                <li>Canal alemán concentrado: droguerías 53 % de las ventas; marcas de distribuidor &gt; 15 %.</li>
                <li>Vulnerabilidad externa: ventas minero-energéticas −13,6 % en 2025.</li>
              </ol>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.3",
        indexTitle: "2.3 Estrategias de la DOFA",
        title: "Estrategias de la DOFA",
        keyMessage: "La salida es subir en la cadena: diferenciarse por origen y ciencia, no por precio.",
        source: "Tabla 7, elaboración propia a partir de la DOFA.",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Tipo</th><th>Cruce</th><th>Estrategia</th></tr>
              </thead>
              <tbody>
                <tr><td>FO (ofensiva)</td><td>Fortalezas con oportunidades</td><td>Posicionar el sérum como cosmética natural trazable para el consumidor clean beauty de Europa y EE. UU., apoyándose en el perfil bioactivo, la historia amazónica y las preferencias arancelarias.</td></tr>
                <tr><td>DO (reorientación)</td><td>Oportunidades para superar debilidades</td><td>Pasar del ingrediente al producto terminado y pedir a ProColombia y a la DIAN la subpartida que usan los exportadores.</td></tr>
                <tr><td>FA (defensiva)</td><td>Fortalezas frente a amenazas</td><td>Diferenciarse de argán y rosa mosqueta por origen, impacto social y evidencia científica, con estudios independientes.</td></tr>
                <tr><td>DA (supervivencia)</td><td>Reducir debilidades y evitar amenazas</td><td>Estandarizar lotes, certificar antes de entrar, delegar la persona responsable en la UE y repartir las ventas entre varios compradores.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.4",
        indexTitle: "2.4 Acuerdos comerciales (TLC)",
        title: "Acuerdos comerciales (TLC)",
        keyMessage: "El arancel no es el obstáculo: el acuerdo con la UE es la puerta principal.",
        source: "Comisión Europea (s. f.); Cancillería de Colombia (2014); INCP (2020, 2022, s. f.); USTR (2013); Valora Analitik (2021); Proexport y El Tiempo (2012); ProColombia (2016, 2019, 2022).",
        html: `
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px;">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">99,9 %</span>
              <span class="pe-kpi-lbl">de las exportaciones industriales colombianas entra libre de arancel a la UE (Cancillería, 2014)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">1 ago. 2013</span>
              <span class="pe-kpi-lbl">aplicación provisional del acuerdo con la UE (Comisión Europea, s. f.)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">99,5 %</span>
              <span class="pe-kpi-lbl">de los bienes industriales colombianos quedó libre de arancel en EE. UU. (Valora Analitik, 2021)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">15 may. 2012</span>
              <span class="pe-kpi-lbl">entrada en vigor del TLC con EE. UU. (USTR, 2013)</span>
            </div>
          </div>
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Acuerdo</th><th>¿Elimina aranceles?</th><th>¿Cómo facilita el acceso?</th><th>Condiciones</th></tr>
              </thead>
              <tbody>
                <tr><td>Colombia, Perú y Ecuador – Unión Europea (27 países)</td><td>Sí: los cosméticos entran libres de arancel (INCP, s. f.)</td><td>Abre canales especializados en el mercado que concentra el 36,3 % de las importaciones mundiales de ingredientes naturales</td><td>Producto originario (acumulación con Perú y Ecuador); cumplir el Reglamento (CE) n.º 1223/2009</td></tr>
                <tr><td>Colombia, Perú y Ecuador – Reino Unido</td><td>Sí: mantiene las preferencias del acuerdo con la UE (INCP, 2020)</td><td>Preserva un comprador histórico; 2.º destino de ingredientes naturales en 2021 (12 %)</td><td>Ley 2067 de 2020, avalada por la Corte Constitucional (INCP, 2022); regulación cosmética propia</td></tr>
                <tr><td>Colombia – Estados Unidos</td><td>Sí: cosméticos y aseo con arancel de 0 % (Proexport y El Tiempo, 2012)</td><td>Llega al país con mayor consumo per cápita de cosméticos (más de USD 260 al año)</td><td>Cumplir la regulación de la FDA (MoCRA)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.5",
        indexTitle: "2.5 Mercados seleccionados",
        title: "Mercados seleccionados",
        keyMessage: "Primero Alemania, después Estados Unidos.",
        source: "Team France Export (s. f.); Premium Beauty News (s. f.); ProColombia (2014, 2016, 2019, 2022).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>País</th><th>¿Por qué?</th><th>Cifra que demuestra la demanda</th><th>Cómo ayuda el acuerdo</th></tr>
              </thead>
              <tbody>
                <tr><td>🇩🇪 Alemania (mercado 1)</td><td>Primer mercado europeo de cosméticos y comprador histórico del cacay</td><td>17.300 M€ en cosméticos terminados en 2025; 53 % por droguerías y 17,2 % por internet. Cosmética natural: 1.260 M€ en 2018 (+5,9 %)</td><td>Arancel cero; los industriales alemanes buscan ingredientes innovadores y sostenibles</td></tr>
                <tr><td>🇺🇸 Estados Unidos (mercado 2)</td><td>Mayor consumo per cápita; pasó del 8.º al 2.º comprador de ingredientes naturales colombianos entre 2010 y 2015</td><td>Más de USD 260 per cápita al año; compras de cosméticos colombianos +43,6 % en 2018</td><td>Reduce el costo aduanero del sérum terminado</td></tr>
              </tbody>
            </table>
          </div>
          <p style="background:#F5F8F6; border-left:4px solid #3E7A62; padding:12px 16px; border-radius:6px; font-size:0.94rem;">
            <strong>Nota metodológica sobre Austria:</strong> Austria compró el 26,4 % de los ingredientes naturales colombianos en 2021, pero se descartó como mercado objetivo principal por la escala tan pequeña de toda la categoría (USD 5,6 M).
          </p>
        `
      },
      {
        code: "DIAPOSITIVA 2.6",
        indexTitle: "2.6 Competencia",
        title: "Competencia",
        keyMessage: "No competimos por precio sino por evidencia, origen y novedad.",
        source: "Kahai en ProColombia B2B Marketplace (s. f.); Tacay (s. f.); ProColombia (2022); El Peruano (2026).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Competidor</th><th>¿Qué lo hace fuerte?</th><th>¿Qué diferencia al cacay? (según las empresas)</th><th>Cómo respondemos</th></tr>
              </thead>
              <tbody>
                <tr><td>Marruecos (argán)</td><td>Líder histórico, reconocido por el consumidor</td><td>50 % más vitamina E y el doble de ácido linoleico; absorción rápida</td><td>Estudios independientes antes de usar esas afirmaciones</td></tr>
                <tr><td>Chile (rosa mosqueta)</td><td>Regeneración de la piel, posicionamiento masivo</td><td>Triple de retinol natural</td><td>Alternativa ligera y no comedogénica para piel madura</td></tr>
                <tr><td>India (extractos)</td><td>Mayor exportador mundial: 14,7 % del mercado</td><td>No es competidor directo; fija el precio de referencia</td><td>Exclusividad de origen e impacto social</td></tr>
                <tr><td>Perú (ingredientes amazónicos)</td><td>USD 1,29 M en negocios en in-cosmetics París 2026</td><td>Comparte el relato amazónico</td><td>Apoyarse en ProColombia y en una historia propia</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.7",
        indexTitle: "2.7 Estrategia de entrada",
        title: "Estrategia de entrada",
        keyMessage: "Alianzas B2B2C en dos etapas: primero el ingrediente, luego el sérum con marca.",
        source: "Team France Export (s. f.); SIPPO (s. f.); RTVC Noticias (s. f.).",
        html: `
          <div class="pe-chain-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="pe-chain-step colombia-here">
              <span class="pe-chain-tag">Origen</span>
              <h4 style="color:#1F4E3D;">1. Colombia</h4>
              <p style="font-size:0.88rem;">Recolección en Lejanías (Meta), prensado en frío y formulación del sérum con BPM.</p>
            </div>
            <div class="pe-chain-step colombia-here">
              <span class="pe-chain-tag">Etapa 1 (B2B) y Etapa 2</span>
              <h4 style="color:#1F4E3D;">2. Importador / Distribuidor</h4>
              <p style="font-size:0.88rem;">Especializado en Europa y EE. UU. Etapa 1: aceite certificado a laboratorios. Etapa 2: sérum con marca.</p>
            </div>
            <div class="pe-chain-step">
              <span class="pe-chain-tag" style="background:#3E7A62;">Canal Especializado</span>
              <h4 style="color:#1F4E3D;">3. Tienda / Farmacia</h4>
              <p style="font-size:0.88rem;">Tiendas naturales, farmacias especializadas y comercio electrónico en Alemania.</p>
            </div>
            <div class="pe-chain-step">
              <span class="pe-chain-tag" style="background:#3E7A62;">Destino Final</span>
              <h4 style="color:#1F4E3D;">4. Consumidor</h4>
              <p style="font-size:0.88rem;">Nicho clean beauty y cuidado de piel madura que valora ciencia y origen trazable.</p>
            </div>
          </div>
          <ul style="padding-left:22px; font-size:0.96rem; display:grid; gap:8px;">
            <li><strong>¿Cómo?</strong> Con importadores y distribuidores especializados en Europa y EE. UU. Etapa 1: aceite certificado a laboratorios y marcas. Etapa 2: sérum con marca de origen.</li>
            <li><strong>¿A quién?</strong> Consumidor de nicho clean beauty y de cuidado de piel madura, con poder adquisitivo, que valora la ciencia y el origen trazable. En B2B: laboratorios que formulan con ingredientes naturales.</li>
            <li><strong>Canal en Alemania:</strong> tiendas naturales, farmacias especializadas y comercio electrónico (las droguerías tienen el 53 % de las ventas y el comercio en línea el 17,2 %).</li>
            <li><strong>Promoción:</strong> ferias con ProColombia (in-cosmetics con apoyo de SIPPO; primera participación en Cosmoprof North America, Las Vegas).</li>
          </ul>
        `
      },
      {
        code: "DIAPOSITIVA 2.8",
        indexTitle: "2.8 Requisitos regulatorios",
        title: "Requisitos regulatorios",
        keyMessage: "El arancel cero no basta: cada mercado exige su propia regulación cosmética.",
        source: "Comisión Europea (s. f.); Registrar Corp (s. f.); SGS (2024); Foley & Lardner (s. f.).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Mercado</th><th>Norma</th><th>Qué exige</th><th>Quién lo gestiona</th></tr>
              </thead>
              <tbody>
                <tr><td>Unión Europea</td><td>Reglamento (CE) n.º 1223/2009</td><td>Persona responsable en la UE; notificación en el portal CPNP; informe de seguridad (CPSR); etiqueta con persona responsable, país de origen e ingredientes</td><td>Importador o consultora europea con acuerdo escrito</td></tr>
                <tr><td>Estados Unidos</td><td>MoCRA (2022)</td><td>Registro de instalaciones, listado de productos, sustanciación de seguridad y reporte de eventos adversos graves en máximo 15 días hábiles</td><td>La empresa, con un agente en EE. UU. ante la FDA</td></tr>
              </tbody>
            </table>
          </div>
          <p style="background:#F5F8F6; border-left:5px solid #1F4E3D; padding:14px 18px; border-radius:6px;">
            <strong>Además:</strong> certificaciones voluntarias <strong>COSMOS, ECOCERT Natural y NATRUE</strong>, que abren los canales especializados.
          </p>
        `
      },
      {
        code: "DIAPOSITIVA 2.9",
        indexTitle: "2.9 Portafolio de productos",
        title: "Portafolio de productos",
        keyMessage: "Un producto principal y dos derivados que aprovechan el mismo aceite y su subproducto.",
        source: "Tabla 12: Tacay (s. f.); Mi Cosmética Casera (s. f.); Team France Export (s. f.).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr>
                  <th>Elemento</th>
                  <th>Cacay Amazon Origin Sérum (principal)</th>
                  <th>Cacay Active Shampoo</th>
                  <th>Cacay Nut Exfoliant</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Presentación</td><td><strong>Vidrio ámbar de 30 ml con gotero</strong></td><td>Frasco biodegradable de 250 ml</td><td>Envase ecológico de 200 ml</td></tr>
                <tr><td>Uso</td><td><strong>Cuidado facial de piel madura</strong></td><td>Hidratación y recuperación capilar</td><td>Exfoliante corporal (cosmética circular)</td></tr>
                <tr><td>Beneficio</td><td><strong>Absorción rápida, efecto seco, retinol natural</strong></td><td>72,7 % de ácido linoleico en un análisis de lote</td><td>Torta con 32,56 % de proteína y 527 mg de calcio por 100 g</td></tr>
                <tr><td>Certificación</td><td><strong>COSMOS y ECOCERT Natural</strong></td><td>NATRUE</td><td>ECOCERT Natural</td></tr>
                <tr><td>Cliente</td><td><strong>Consumidor final en Europa y EE. UU.</strong></td><td>Consumidor capilar natural y marcas blancas</td><td>Clean beauty y spas</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 2.10",
        indexTitle: "2.10 Hoja de ruta y conclusiones",
        title: "Hoja de ruta y conclusiones de la Fase 2",
        keyMessage: "El cuello de botella no es el arancel sino la regulación, las certificaciones y el canal.",
        source: "Tabla 13, elaboración propia.",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Horizonte</th><th>Acciones clave</th><th>Indicador</th></tr>
              </thead>
              <tbody>
                <tr><td>Corto plazo (0 a 12 meses)</td><td>Confirmar subpartida con ProColombia y la DIAN; estandarizar lotes; iniciar COSMOS, ECOCERT y NATRUE; estudios de eficacia; contactar importadores y definir persona responsable</td><td>Subpartida confirmada, certificaciones en trámite y un acuerdo con importador</td></tr>
                <tr><td>Mediano plazo (1 a 3 años)</td><td>Vender el aceite como ingrediente; notificar el sérum en el CPNP y lanzarlo en Alemania; ferias como in-cosmetics</td><td>Ventas del ingrediente y primer pedido recurrente del sérum</td></tr>
                <tr><td>Largo plazo (3 a 5 años)</td><td>Registro ante la FDA y entrada a EE. UU.; evaluar derivados y el Reino Unido</td><td>Participación del producto terminado y número de países</td></tr>
              </tbody>
            </table>
          </div>
          <p style="background:#F5F8F6; border-left:5px solid #1F4E3D; padding:12px 18px; border-radius:6px; font-size:0.95rem;">
            <strong>Pendientes honestos:</strong> no hay cifra oficial de exportaciones de cacay (falta subpartida), los precios de competidores debían validarse y las ventajas frente al argán y la rosa mosqueta son afirmaciones de las empresas. La Fase 3 resuelve el de precios.
          </p>
        `
      },
      {
        code: "DIAPOSITIVA 2.11",
        indexTitle: "2.11 Referencias de la Fase 2",
        title: "Referencias de la Fase 2",
        keyMessage: "Última diapositiva de la fase: lista APA 7 con enlaces.",
        source: "Formato APA 7 — Fase 2.",
        html: `
          <div class="pe-ref-list">
            <ol>
              <li>Analdex. (2026, 4 de febrero). <em>Exportaciones de Colombia 2025</em> (informe mensual con datos del DANE). <a href="https://analdex.org/2026/02/04/exportaciones-de-colombia-2025/" target="_blank" rel="noopener">https://analdex.org/2026/02/04/exportaciones-de-colombia-2025/</a></li>
              <li>ANDI, Cámara de la Industria Cosmética y de Aseo. (2026, mayo). <em>Industria cosmética y de aseo doméstico: un motor de USD 6.800 millones impulsado por las exportaciones y la innovación</em>. <a href="https://www.andi.com.co/Home/Noticia/18027-industria-cosmetica-y-de-aseo-domestico" target="_blank" rel="noopener">https://www.andi.com.co/Home/Noticia/18027-industria-cosmetica-y-de-aseo-domestico</a></li>
              <li>Cancillería de Colombia. (2014). <em>Acuerdo Comercial Colombia – Unión Europea</em> (documento «eutopa-tlc-español»). <a href="https://www.cancilleria.gov.co/sites/default/files/DocEstrategicos/2014/eutopa-tlc-espanol.pdf" target="_blank" rel="noopener">https://www.cancilleria.gov.co/sites/default/files/DocEstrategicos/2014/eutopa-tlc-espanol.pdf</a></li>
              <li>Comisión Europea. (s. f.). <em>Acuerdo comercial UE-Colombia-Ecuador-Perú</em>. Access2Markets. <a href="https://trade.ec.europa.eu/access-to-markets/es/content/acuerdo-comercial-ue-colombia-ecuador-peru" target="_blank" rel="noopener">https://trade.ec.europa.eu/access-to-markets/es/content/acuerdo-comercial-ue-colombia-ecuador-peru</a></li>
              <li>Comisión Europea. (s. f.). <em>Portal de Notificación de Productos Cosméticos (CPNP): guía para los usuarios</em>. <a href="https://ec.europa.eu/docsroom/documents/29563/attachments/1/translations/es/renditions/native" target="_blank" rel="noopener">https://ec.europa.eu/docsroom/documents/29563/attachments/1/translations/es/renditions/native</a></li>
              <li>Corden, W. M. y Neary, J. P. (1982). Booming sector and de-industrialisation in a small open economy. <em>The Economic Journal</em>, 92(368), 825-848.</li>
              <li>El Peruano. (2026). <em>Ingredientes peruanos en la industria cosmética</em>. <a href="https://www.elperuano.pe/noticia/293866-ingredientes-peruanos-en-la-industria-cosmetica" target="_blank" rel="noopener">https://www.elperuano.pe/noticia/293866-ingredientes-peruanos-en-la-industria-cosmetica</a></li>
              <li>Foley & Lardner LLP. (s. f.). <em>Modernization of Cosmetics Regulation Act of 2022: What you need to know</em>. <a href="https://www.foley.com/?p=45712" target="_blank" rel="noopener">https://www.foley.com/?p=45712</a></li>
              <li>Gereffi, G., Humphrey, J. y Sturgeon, T. (2005). The governance of global value chains. <em>Review of International Political Economy</em>, 12(1), 78-104.</li>
              <li>Global Market Insights. (2026). <em>Tamaño y pronóstico del mercado de cosméticos naturales (2026-2035)</em>. <a href="https://www.gminsights.com/es/industry-analysis/natural-cosmetics-market" target="_blank" rel="noopener">https://www.gminsights.com/es/industry-analysis/natural-cosmetics-market</a></li>
              <li>Hidalgo, C. A. y Hausmann, R. (2009). The building blocks of economic complexity. <em>Proceedings of the National Academy of Sciences</em>, 106(26), 10570-10575.</li>
              <li>INCP. (2020, febrero). <em>Acuerdo comercial con Reino Unido en dirección correcta</em>. <a href="https://incp.org.co/novedades/2020/02/acuerdo-comercial-con-reino-unido-en-direccion-correcta/" target="_blank" rel="noopener">https://incp.org.co/novedades/2020/02/acuerdo-comercial-con-reino-unido-en-direccion-correcta/</a></li>
              <li>INCP. (2022, marzo). <em>Corte Constitucional da luz verde al acuerdo comercial con Reino Unido</em>. <a href="https://incp.org.co/publicaciones/infoincp-publicaciones/informacion-para-empresas/actualidad/2022/03/corte-constitucional-da-luz-verde-al-acuerdo-comercial-con-reino-unido/" target="_blank" rel="noopener">https://incp.org.co/publicaciones/infoincp-publicaciones/informacion-para-empresas/actualidad/2022/03/corte-constitucional-da-luz-verde-al-acuerdo-comercial-con-reino-unido/</a></li>
              <li>INCP. (s. f.). <em>Los cosméticos y sus posibilidades comerciales en Europa</em>. <a href="https://incp.org.co/?p=18874" target="_blank" rel="noopener">https://incp.org.co/?p=18874</a></li>
              <li>Kahai. (2018, 30 de octubre). <em>El cacay, la nuez de moda que construye paz</em>. <a href="https://kahai.co/2018/10/30/el-cacay-la-nuez-de-moda-que-construye-paz/" target="_blank" rel="noopener">https://kahai.co/2018/10/30/el-cacay-la-nuez-de-moda-que-construye-paz/</a></li>
              <li>Kahai. (2024, 3 de julio). <em>Cacay: la nuez de la belleza que causa furor</em>. <a href="https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/" target="_blank" rel="noopener">https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/</a></li>
              <li>Mi Cosmética Casera. (s. f.). <em>Aceite de cacay 1.ª presión en frío BIO</em> (ficha de producto). <a href="https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/" target="_blank" rel="noopener">https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/</a></li>
              <li>Prebisch, R. (1950). <em>The economic development of Latin America and its principal problems</em>. Naciones Unidas, CEPAL.</li>
              <li>Premium Beauty News. (s. f.). <em>Allemagne : les cosmétiques naturels</em>. <a href="https://www.premiumbeautynews.com/fr/allemagne-les-cosmetiques-naturels,14772" target="_blank" rel="noopener">https://www.premiumbeautynews.com/fr/allemagne-les-cosmetiques-naturels,14772</a></li>
              <li>ProColombia. (2014, 6 de noviembre). <em>Cacay, la nuez colombiana para cosméticos que fascina al mundo</em>. <a href="https://procolombia.co/colombiatrade/exportador/articulos/cacay-la-nuez-colombiana-para-cosmeticos-que-fascina-al-mundo" target="_blank" rel="noopener">https://procolombia.co/colombiatrade/exportador/articulos/cacay-la-nuez-colombiana-para-cosmeticos-que-fascina-al-mundo</a></li>
              <li>ProColombia. (2016, agosto). <em>Ingredientes naturales en el sector cosmético</em> (presentación). <a href="https://unctad.org/meetings/en/Presentation/ditc-ted-16082016-colombia-3-Procolombia.pdf" target="_blank" rel="noopener">https://unctad.org/meetings/en/Presentation/ditc-ted-16082016-colombia-3-Procolombia.pdf</a></li>
              <li>ProColombia. (2019, 10 de abril). <em>Ingredientes naturales colombianos con los ojos puestos en conquistar el mercado</em>. <a href="https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado" target="_blank" rel="noopener">https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado</a></li>
              <li>ProColombia. (2022). <em>Oportunidades para ingredientes naturales y productos cosméticos en la Unión Europea y Suiza</em> (presentación). <a href="https://gqspcolombia.org/fase1-quimicos/wp-content/uploads/2022/12/PPT_ingredientes_naturales_EUROPA-1.pdf" target="_blank" rel="noopener">https://gqspcolombia.org/fase1-quimicos/wp-content/uploads/2022/12/PPT_ingredientes_naturales_EUROPA-1.pdf</a></li>
              <li>ProColombia. (2026, 20 de agosto). <em>Rueda de Negocios de ProColombia en la Feria de Belleza y Salud dejó negocios y expectativas por más de USD 1,7 millones</em>. <a href="https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones" target="_blank" rel="noopener">https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones</a></li>
              <li>ProColombia. (s. f.). <em>12 ingredientes naturales para el sector cosmético</em>. <a href="https://procolombia.co/sala-de-prensa/noticias/12-ingredientes-naturales-para-el-sector-cosmetico" target="_blank" rel="noopener">https://procolombia.co/sala-de-prensa/noticias/12-ingredientes-naturales-para-el-sector-cosmetico</a></li>
              <li>ProColombia. (s. f.). <em>Aceite de cacay, Kahai SAS</em>. Colombian B2B Marketplace. <a href="https://b2bmarketplace.procolombia.co/es/salud-y-belleza/cosmeticos-naturales/aceite-de-cacay-13025" target="_blank" rel="noopener">https://b2bmarketplace.procolombia.co/es/salud-y-belleza/cosmeticos-naturales/aceite-de-cacay-13025</a></li>
              <li>Proexport Colombia y El Tiempo. (2012, mayo). <em>ABC del TLC con Estados Unidos</em> (fascículo). <a href="https://www.bancoldex.com/sites/default/files/documentos/3715_TLC_eltiempo_02.pdf" target="_blank" rel="noopener">https://www.bancoldex.com/sites/default/files/documentos/3715_TLC_eltiempo_02.pdf</a></li>
              <li>Registrar Corp. (s. f.). <em>Reglamento de la UE 1223/2009 (Reglamento n.º (CE) 1223/2009)</em>. <a href="https://www.registrarcorp.com/es/blog/cosmetics/cosmetic-regulations/eu-regulation-1223-2009-regulation-no-ec-1223-2009/" target="_blank" rel="noopener">https://www.registrarcorp.com/es/blog/cosmetics/cosmetic-regulations/eu-regulation-1223-2009-regulation-no-ec-1223-2009/</a></li>
              <li>RTVC Noticias. (s. f.). <em>Colombia participará en un importante evento de belleza</em>. <a href="https://www.rtvcnoticias.com/colombia-participara-importante-evento-belleza" target="_blank" rel="noopener">https://www.rtvcnoticias.com/colombia-participara-importante-evento-belleza</a></li>
              <li>Semana. (2020, 1 de diciembre). <em>Historia de Kahai que exportan nuez cacay en Colombia</em>. <a href="https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/" target="_blank" rel="noopener">https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/</a></li>
              <li>SGS. (2024, marzo). <em>Your quick guide to US MoCRA</em>. <a href="https://www.sgs.com/en-om/news/2024/03/your-quick-guide-to-us-mocra" target="_blank" rel="noopener">https://www.sgs.com/en-om/news/2024/03/your-quick-guide-to-us-mocra</a></li>
              <li>Singer, H. W. (1950). The distribution of gains between investing and borrowing countries. <em>American Economic Review</em>, 40(2), 473-485.</li>
              <li>SIPPO. (s. f.). <em>Natural ingredients in Colombia: a sector with high potential</em>. <a href="https://www.sippo.ch/export/sectors/natural-ingredients/bso-cooperation-in-colombia" target="_blank" rel="noopener">https://www.sippo.ch/export/sectors/natural-ingredients/bso-cooperation-in-colombia</a></li>
              <li>Tacay Natural Oils. (2025). <em>Árboles de cacay</em>. <a href="https://tacay.co/arboles-de-cacay/" target="_blank" rel="noopener">https://tacay.co/arboles-de-cacay/</a></li>
              <li>Tacay Natural Oils. (s. f.). <em>Aceite de cacay 1 litro</em> (ficha de producto). <a href="https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/" target="_blank" rel="noopener">https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/</a></li>
              <li>Team France Export. (s. f.). <em>Fiche marché cosmétiques: Allemagne (les fondamentaux)</em>. <a href="https://www.teamfrance-export.fr/fiche-marche/cosmetiques/cosmetiques/DE" target="_blank" rel="noopener">https://www.teamfrance-export.fr/fiche-marche/cosmetiques/cosmetiques/DE</a></li>
              <li>USTR. (2013, 15 de mayo). <em>American manufacturing and agricultural exports on the rise as U.S.-Colombia trade agreement marks one year</em>. <a href="https://ustr.gov/about-us/policy-offices/press-office/press-releases/2013/may/american-manufacturing-and-agricultural-exports-rise-u" target="_blank" rel="noopener">https://ustr.gov/about-us/policy-offices/press-office/press-releases/2013/may/american-manufacturing-and-agricultural-exports-rise-u</a></li>
              <li>Valora Analitik. (2021). <em>Vehículos, calzado y químicos que Colombia importa de EE. UU. no tendrán arancel en 2021</em>. <a href="https://www.valoraanalitik.com/?p=91534" target="_blank" rel="noopener">https://www.valoraanalitik.com/?p=91534</a></li>
            </ol>
          </div>
        `
      }
    ]
  },

  3: {
    id: 3,
    shortTitle: "Fase 3 · Valor, costos y riesgos",
    fullTitle: "Fase 3 · Valor agregado, plan de acción, costos y riesgos",
    objective: "Fase protagonista del módulo: cómo se crea el valor, qué haremos mes a mes, cuánto cuesta un frasco y qué podría salir mal.",
    slides: [
      {
        code: "DIAPOSITIVA 3.1",
        indexTitle: "3.1 Portada de la Fase 3",
        title: "Fase 3 · Plan Estratégico de Inserción Internacional",
        keyMessage: "Lo que preguntaría un inversionista: ¿cómo se crea el valor, qué haremos mes a mes, cuánto cuesta un frasco y qué podría salir mal?",
        isCover: true,
        priority: "Prioridad alta",
        source: "Dólar Hoy (2026); Interactive Crypto (2026); Tabla 17.",
        html: `
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:10px;">
            <span style="background:rgba(255,255,255,0.14); padding:8px 16px; border-radius:999px; font-weight:700; font-size:0.9rem;">1. Valor agregado (paso 8)</span>
            <span style="background:rgba(255,255,255,0.14); padding:8px 16px; border-radius:999px; font-weight:700; font-size:0.9rem;">2. Plan de acción (paso 9)</span>
            <span style="background:rgba(255,255,255,0.14); padding:8px 16px; border-radius:999px; font-weight:700; font-size:0.9rem;">3. Costos (paso 10)</span>
            <span style="background:rgba(255,255,255,0.14); padding:8px 16px; border-radius:999px; font-weight:700; font-size:0.9rem;">4. Riesgos (paso 11)</span>
          </div>
          <p style="font-size:0.98rem; color:#8FB8A3;">
            <strong>Cifras de entrada:</strong> TRM de $3.297,07 (12 de noviembre de 2026) · 1 € = USD 1,1267 (4 de noviembre de 2026) · 1 £ ≈ USD 1,345 (10 de noviembre de 2026).
          </p>
          <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:16px;">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 6,73</span>
              <span class="pe-kpi-lbl">costo por frasco de 30 ml (≈ $22.189 COP)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 14,00</span>
              <span class="pe-kpi-lbl">precio al importador (≈ $46.159 COP)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">51,9 %</span>
              <span class="pe-kpi-lbl">margen</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">Mes 9</span>
              <span class="pe-kpi-lbl">primer envío a Fráncfort</span>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.2",
        indexTitle: "3.2 Paso 8.1 · Escalera de valor",
        title: "Paso 8.1 · Escalera de valor (Tabla 14)",
        keyMessage: "El mismo aceite vale unas diez veces más convertido en sérum con marca.",
        priority: "Prioridad alta",
        source: "Tabla 14: Tabla 3, Tacay Natural Oils (s. f.), Semana (2020), Kahai (2024) y Tabla 17.",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>riterio</th><th>Hoy (según nuestro diagnóstico)</th><th>Con nuestra propuesta</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Eslabón de la cadena donde está Colombia</td>
                  <td>Eslabones 2 y 3 de la Tabla 3: recolección, extracción y venta del aceite como ingrediente semitransformado. La formulación y la marca (eslabones 4 y 5) quedan en el exterior.</td>
                  <td style="background:#EBF4F0;"><strong>Eslabones 4 y 5:</strong> el aceite se formula, se envasa y se vende con marca propia desde Colombia. El aceite como ingrediente se mantiene como línea secundaria que genera caja mientras el sérum se posiciona.</td>
                </tr>
                <tr>
                  <td>Forma en que se vende el producto</td>
                  <td>A granel y por cotización, en presentaciones de 1, 5 y 20 litros (Tacay Natural Oils, s. f.), a comercializadores que lo entregan a empresas cosméticas como materia prima (Semana, 2020).</td>
                  <td style="background:#EBF4F0;"><strong>Sérum terminado de 30 ml en vidrio ámbar</strong>, con certificación COSMOS Natural, etiqueta en alemán e inglés y un código QR que muestra el lote y la comunidad de origen. Se vende a un importador o distribuidor especializado en Alemania.</td>
                </tr>
                <tr>
                  <td>Quién se queda con la mayor parte del valor</td>
                  <td>Las marcas y los salones del exterior. Los 27 ml de aceite que lleva un frasco valen cerca de USD 1,30 como ingrediente (cálculo propio, Tabla 17), mientras que una crema con cacay se ha vendido a USD 200 la onza (Kahai, 2024).</td>
                  <td style="background:#EBF4F0;"><strong>La empresa colombiana vende ese mismo aceite, ya convertido en sérum, a USD 14,00 el frasco:</strong> unas diez veces lo que valdría como ingrediente. El distribuidor y la tienda siguen ganando su parte, pero la formulación, la marca y el margen del producto se quedan en Colombia.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pe-kpi-grid">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 1,30</span>
              <span class="pe-kpi-lbl">valor del aceite de un frasco como ingrediente</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 14,00</span>
              <span class="pe-kpi-lbl">valor del mismo aceite como sérum</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">× 10</span>
              <span class="pe-kpi-lbl">veces más valor capturado en Colombia</span>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.3",
        indexTitle: "3.3 Paso 8.2 · Proceso de transformación",
        title: "Paso 8.2 · Proceso de transformación (Tabla 15)",
        keyMessage: "De la nuez al frasco en cinco etapas, con aliados que ya existen.",
        priority: "Prioridad alta",
        source: "Tabla 15: The Tico Times (s. f.); Radio Nacional de Colombia (s. f.-a, s. f.-b); Caynut (s. f.).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Etapa</th><th>¿Qué se hace?</th><th>¿Dónde y con quién? (región, empresa, comunidad)</th></tr>
              </thead>
              <tbody>
                <tr><td>🤲 1. Recolección y secado de la nuez</td><td>Se recogen los frutos maduros durante la cosecha, que va de febrero a abril, se separa la nuez y se seca.</td><td>Lejanías (Meta), con Asprocacay, que reúne a 26 familias campesinas, y otros recolectores del piedemonte.</td></tr>
                <tr><td>⚙️ 2. Descascarado y prensado en frío</td><td>Se rompe la cáscara, se prensa la almendra sin calor, se decanta y se filtra. La torta se guarda para el exfoliante.</td><td>En el Meta, con una de las dos empresas que hoy extraen aceite en frío en el departamento, mediante contrato de maquila.</td></tr>
                <tr><td>🧪 3. Análisis y estandarización del lote</td><td>Perfil de ácidos grasos, índice de peróxidos y carga microbiana de cada lote.</td><td>Laboratorio acreditado; por ejemplo, el de la Universidad del Valle, que ya analizó aceite de cacay para un productor colombiano.</td></tr>
                <tr><td>💧 4. Formulación, llenado y empaque</td><td>Aceite de cacay (90 %) + vitamina E natural y otros aceites certificados; llenado en frasco ámbar, etiqueta y QR del lote.</td><td>Laboratorio maquilador con BPM del Invima, en Bogotá o en el Eje Cafetero.</td></tr>
                <tr><td>✈️ 5. Certificación, notificación y despacho</td><td>Certificación COSMOS Natural, informe de seguridad y notificación CPNP; envío aéreo a Fráncfort.</td><td>Equipo del proyecto, certificadora, persona responsable en la UE y agencia de aduanas en El Dorado (Bogotá).</td></tr>
              </tbody>
            </table>
          </div>
          <div style="background:#F5F8F6; border:1px solid #BFBFBF; padding:12px 18px; border-radius:8px; font-weight:700; color:#1F4E3D; text-align:center;">
            Ruta física del producto: 📍 Lejanías (Meta) ➔ 🏭 Bogotá / Eje Cafetero (BPM Invima + El Dorado) ➔ ✈️ Fráncfort (Alemania)
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.4",
        indexTitle: "3.4 Paso 8.3 · Historia de marca",
        title: "Paso 8.3 · Historia de marca",
        keyMessage: "Cacay Amazon Origin — «La selva colombiana, gota a gota».",
        isCover: true,
        priority: "Prioridad alta",
        source: "Elaboración propia con base en Kahai (2024), ProColombia (2019) y Radio Nacional de Colombia (s. f.-a).",
        html: `
          <blockquote style="font-family:var(--pe-serif); font-style:italic; font-size:1.5rem; line-height:1.55; background:rgba(255,255,255,0.08); border-left:5px solid #8FB8A3; padding:26px 32px; border-radius:12px;">
            «En el piedemonte del Meta crece un árbol que durante décadas terminó convertido en leña. Su nuez, el cacay, servía para alimentar al ganado y curar heridas, hasta que alguien descubrió lo que su aceite hace por la piel. Hoy la recogen a mano familias campesinas de Lejanías, que encontraron en ella una forma de vivir del bosque en lugar de talarlo. Nosotros la prensamos en frío, analizamos cada lote y te contamos en el frasco de dónde viene. Si buscas un aceite ligero, natural y con una historia que puedes comprobar, esta gota es para ti».
          </blockquote>
          <ul style="padding-left:22px; font-size:1rem; display:grid; gap:8px; color:rgba(255,255,255,0.92);">
            <li><strong>Nombre de la marca:</strong> Cacay Amazon Origin (el mismo del portafolio de la Fase 2).</li>
            <li><strong>Eslogan:</strong> «La selva colombiana, gota a gota».</li>
            <li><strong>Nota honesta:</strong> antes de registrarla se hará la búsqueda de antecedentes, porque «Amazon» coincide con una marca muy conocida; la alternativa es <em>Cacay Selva Origen</em>.</li>
          </ul>
        `
      },
      {
        code: "DIAPOSITIVA 3.5",
        indexTitle: "3.5 Paso 8.4 · Propuesta de valor",
        title: "Paso 8.4 · Propuesta de valor en una frase",
        keyMessage: "Distinto al argán y comprobable desde un código QR.",
        priority: "Prioridad alta",
        source: "Elaboración propia.",
        html: `
          <div style="background:#F5F8F6; border-left:6px solid #1F4E3D; padding:24px 28px; border-radius:10px; font-family:var(--pe-serif); font-size:1.55rem; line-height:1.5;">
            Para <strong>consumidores alemanes de piel madura</strong> <span style="font-size:0.8rem; background:#1F4E3D; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">cliente</span>
            que necesitan <strong>cuidar su piel con productos naturales cuyo origen puedan verificar</strong> <span style="font-size:0.8rem; background:#3E7A62; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">necesidad</span>,
            nuestro producto <strong>Cacay Amazon Origin Sérum</strong> <span style="font-size:0.8rem; background:#1F4E3D; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">producto</span>
            ofrece <strong>hidratación ligera, de absorción rápida y sin sensación grasosa</strong> <span style="font-size:0.8rem; background:#3E7A62; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">beneficio</span>,
            a diferencia del <strong>aceite de argán de Marruecos</strong> <span style="font-size:0.8rem; background:#555; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">competidor</span>,
            porque <strong>viene de una nuez amazónica casi desconocida en Europa, recolectada por familias campesinas del Meta y con cada lote analizado y trazable desde un código QR</strong> <span style="font-size:0.8rem; background:#1F4E3D; color:#fff; padding:2px 8px; border-radius:4px; font-family:var(--pe-sans);">diferencia</span>.
          </div>
          <p style="font-size:0.98rem;">
            <strong>Por qué el argán:</strong> fue el primer competidor de la Tabla 10 y es el aceite que el consumidor europeo ya conoce. No decimos que el cacay sea «mejor»; decimos que es distinto y que se puede comprobar de dónde viene.
          </p>
        `
      },
      {
        code: "DIAPOSITIVA 3.6a",
        indexTitle: "3.6a Paso 9 · Diagrama de Gantt (12 meses)",
        title: "Paso 9 · Plan de acción (Diagrama de Gantt 2027)",
        keyMessage: "El cuello de botella no es producir sino certificar: del mes 3 al mes 8.",
        priority: "Prioridad alta",
        source: "Tabla 16: TradeFairDates (s. f.); in-cosmetics Global (2026); EventsEye (s. f.); Tablas 17 y 18.",
        html: `
          <p style="font-size:0.95rem;">
            <strong>Mes 1 = enero de 2027.</strong> Responsables: <strong>Juan José Gómez</strong> (producción, permisos y logística), <strong>Angie Ochoa</strong> (formulación, marca y empaque) y <strong>Juan Manuel Hernández</strong> (comercial y ferias).
          </p>
          <div class="pe-chart-box">
            <div class="pe-gantt-grid">
              <div class="pe-gantt-row">
                <div class="pe-gantt-label" style="font-weight:700; color:#1F4E3D;">Actividad (2027)</div>
                <div class="pe-gantt-header">E</div><div class="pe-gantt-header">F</div><div class="pe-gantt-header">M</div><div class="pe-gantt-header">A</div><div class="pe-gantt-header">M</div><div class="pe-gantt-header">J</div><div class="pe-gantt-header">J</div><div class="pe-gantt-header">A</div><div class="pe-gantt-header">S</div><div class="pe-gantt-header">O</div><div class="pe-gantt-header">N</div><div class="pe-gantt-header">D</div>
              </div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">1. Abastecimiento y estandarización</div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">2. VIVANESS, Núremberg (16–19 feb)</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">3. Fórmula y estabilidad</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">4. Marca y empaque</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">5. in-cosmetics Global, Barcelona (6–8 abr)</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label"><strong>6. Certificaciones y permisos (crítico)</strong></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">7. Canales digitales y muestras</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">8. Primer lote (1.500 u)</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">9. Belleza y Salud, Bogotá (4–8 ago)</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label"><strong>10. Primer envío a Fráncfort (mes 9)</strong></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell critical"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div></div>
              <div class="pe-gantt-row"><div class="pe-gantt-label">11. Seguimiento y 2.º pedido</div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div><div class="pe-gantt-cell active"></div></div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.6b",
        indexTitle: "3.6b Paso 9 · Tabla 16 completa",
        title: "Paso 9 · Plan de acción detallado (Tabla 16 completa)",
        keyMessage: "Once actividades con responsable, mes, recursos e indicador verificable.",
        priority: "Prioridad alta",
        source: "Tabla 16: TradeFairDates (s. f.); in-cosmetics Global (2026); EventsEye (s. f.); Tablas 17 y 18.",
        html: `
          <div class="pe-table-wrap" style="max-height:430px; overflow-y:auto;">
            <table class="pe-table">
              <thead>
                <tr><th>Actividad</th><th>Responsable</th><th>Mes (1 a 12)</th><th>Recursos necesarios</th><th>¿Cómo sabremos que se cumplió?</th></tr>
              </thead>
              <tbody>
                <tr><td>1. Firmar el acuerdo de abastecimiento con Asprocacay y la extractora, y estandarizar el aceite (producción)</td><td>Juan José Gómez</td><td>1 y 2</td><td>Visita a Lejanías (Meta); compra anticipada de unos 80 kg de aceite en plena cosecha; análisis de tres lotes de prueba</td><td>Contrato firmado con precio y volumen, y ficha técnica con el perfil de ácidos grasos de los tres lotes</td></tr>
                <tr><td>2. Visitar VIVANESS 2027 en Núremberg, del 16 al 19 de febrero (contacto comercial)</td><td>Juan Manuel Hernández</td><td>2</td><td>Tiquetes y estadía; muestras del aceite; agenda previa con la oficina de ProColombia en Alemania</td><td>Al menos 10 reuniones con importadores o distribuidores y 3 que acepten recibir muestras del sérum</td></tr>
                <tr><td>3. Desarrollar la fórmula del sérum y probar su estabilidad (transformación)</td><td>Angie Ochoa</td><td>2 a 4</td><td>Laboratorio maquilador con BPM del Invima; prueba de estabilidad en el frasco ámbar</td><td>Fórmula aprobada y estudio de estabilidad sin cambios de olor, color ni peróxidos</td></tr>
                <tr><td>4. Crear la marca y el empaque (marca y empaque)</td><td>Angie Ochoa</td><td>2 a 4</td><td>Diseñador; búsqueda de antecedentes y registro de marca ante la SIC y la EUIPO; etiqueta según el artículo 19 del Reglamento (CE) n.º 1223/2009</td><td>Solicitudes de marca radicadas y arte final aprobado por la persona responsable en la UE</td></tr>
                <tr><td>5. Ofrecer el aceite como ingrediente en in-cosmetics Global, Barcelona, del 6 al 8 de abril (contacto comercial)</td><td>Juan Manuel Hernández</td><td>4</td><td>Muestras de 50 ml, ficha técnica y certificado de análisis; apoyo de ProColombia</td><td>Primer pedido de aceite como ingrediente o 5 laboratorios interesados</td></tr>
                <tr class="pe-highlight-row"><td>6. Tramitar COSMOS Natural, NSO del Invima, CPSR, persona responsable y notificación CPNP (permisos y certificaciones)</td><td>Juan José Gómez</td><td>3 a 8</td><td>Cerca de USD 7.390 (Tabla 18)</td><td>Certificado COSMOS, código de NSO y número de notificación en el CPNP</td></tr>
                <tr><td>7. Publicar la oferta en el Colombian B2B Marketplace de ProColombia, el sitio web y LinkedIn, y enviar muestras a tres distribuidores (contacto comercial)</td><td>Angie Ochoa</td><td>5 a 7</td><td>Perfil en la plataforma; sitio web; 60 muestras del sérum</td><td>Carta de intención u orden de compra de un importador alemán</td></tr>
                <tr><td>8. Producir el primer lote de 1.500 unidades (producción)</td><td>Juan José Gómez</td><td>8</td><td>Cerca de USD 4.970 en materia prima, transformación y empaque (Tabla 17)</td><td>Lote liberado con certificado de análisis y 1.500 frascos codificados</td></tr>
                <tr><td>9. Participar en la rueda de negocios de Belleza y Salud en Corferias, del 4 al 8 de agosto (contacto comercial)</td><td>Juan Manuel Hernández</td><td>8</td><td>Inscripción con ProColombia; muestras y catálogo</td><td>Contactos con compradores de otros mercados para el segundo año</td></tr>
                <tr class="pe-highlight-row"><td>10. Hacer el primer envío de 1.000 unidades a Fráncfort (primer envío)</td><td>Juan José Gómez</td><td>9</td><td>Agencia de aduanas, declaración de exportación, prueba de origen del acuerdo con la UE y seguro de la carga</td><td>Guía aérea, factura pagada y mercancía recibida por el importador sin roturas</td></tr>
                <tr><td>11. Seguir las ventas y negociar el segundo pedido</td><td>Juan Manuel Hernández</td><td>10 a 12</td><td>Reportes de venta del distribuidor; reuniones virtuales</td><td>Segundo pedido de al menos 500 unidades antes del mes 12</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.7",
        indexTitle: "3.7 Paso 9 · Ruta crítica y ferias",
        title: "Paso 9 · Ruta crítica y ferias",
        keyMessage: "Si COSMOS se demora, el primer pedido puede salir sin el sello; lo que no puede faltar es la notificación en el CPNP.",
        priority: "Prioridad alta",
        source: "TradeFairDates (s. f.); in-cosmetics Global (2026); EventsEye (s. f.); ProColombia (2026).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Fecha (2027)</th><th>Hito</th><th>Para qué</th></tr>
              </thead>
              <tbody>
                <tr><td>16 al 19 de febrero (mes 2)</td><td>VIVANESS, Núremberg</td><td>Conocer importadores y distribuidores de cosmética natural</td></tr>
                <tr><td>6 al 8 de abril (mes 4)</td><td>in-cosmetics Global, Barcelona</td><td>Vender el aceite como ingrediente (nivel 1)</td></tr>
                <tr><td>Meses 3 a 8</td><td>Certificaciones y permisos</td><td>Requisito para vender en la UE (CPNP obligatorio; COSMOS voluntario)</td></tr>
                <tr><td>4 al 8 de agosto (mes 8)</td><td>Belleza y Salud, Corferias, Bogotá</td><td>Rueda de negocios de ProColombia; en 2026 reportó más de USD 1,7 M en negocios y expectativas</td></tr>
                <tr class="pe-highlight-row"><td>✈️ Mes 9 (septiembre)</td><td>Primer envío de 1.000 unidades a Fráncfort</td><td>Primera venta del sérum</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.8",
        indexTitle: "3.8 Paso 10 · Costo por unidad (Tabla 17)",
        title: "Paso 10 · Costo por unidad (Tabla 17)",
        keyMessage: "Un frasco de 30 ml cuesta USD 6,73 puesto en Fráncfort y se vende a USD 14,00: margen del 51,9 %.",
        priority: "Prioridad alta",
        source: "Tabla 17. TRM de $3.297,07 del 12 de noviembre de 2026 (Dólar Hoy, 2026); 1 € = USD 1,1267 (Interactive Crypto, 2026); 1 £ ≈ USD 1,345 (FXStreet, 2026). Equivalentes en pesos: cálculo propio con la TRM.",
        html: `
          <div class="pe-cop-toggle-bar">
            <p style="font-size:0.93rem; margin:0;">
              <strong>Supuestos generales:</strong> unidad = 1 frasco de 30 ml del sérum; primer año de 3.000 unidades en dos lotes de 1.500; precio puesto en Fráncfort (CIP), por eso el transporte va dentro del costo.
            </p>
            <button type="button" class="pe-cop-btn active" id="btn-toggle-cop" onclick="toggleCopColumn()">
              Ocultar / Ver Equivalente en Pesos (COP)
            </button>
          </div>
          <div class="pe-table-wrap" id="tabla-17-wrap">
            <table class="pe-table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Valor por unidad (USD)</th>
                  <th class="col-cop">Equivalente (COP)</th>
                  <th>Fuente o supuesto</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Materia prima</td><td>1,45</td><td class="col-cop">$4.781</td><td>27 ml de aceite de cacay (24,8 g) a USD 50/kg con 5 % de merma, más USD 0,15 de vitamina E y otros aceites. Precio mayorista de referencia: USD 45 a 59 por kg (Nature In Bottle, s. f.)</td></tr>
                <tr><td>Transformación y mano de obra</td><td>0,91</td><td class="col-cop">$3.000</td><td>Dos operarios a salario mínimo de 2026 (Consultorsalud, 2025), uso de planta del maquilador y análisis por lote (Tabla 18)</td></tr>
                <tr><td>Empaque y etiquetado</td><td>0,95</td><td class="col-cop">$3.132</td><td>Frasco ámbar con gotero (USD 0,55), caja de cartón reciclado (USD 0,30) y etiqueta con QR (USD 0,10). Frasco entre USD 0,24 al por mayor (Chilat, s. f.) y 0,85 € al detal (IBD Ciencia, s. f.)</td></tr>
                <tr><td>Certificaciones y permisos (repartidos por unidad)</td><td>2,46</td><td class="col-cop">$8.111</td><td>USD 7.388 del primer año repartidos en 3.000 unidades (Tabla 18)</td></tr>
                <tr><td>Transporte internacional</td><td>0,96</td><td class="col-cop">$3.165</td><td>0,11 kg por unidad a USD 6/kg por vía aérea Bogotá–Fráncfort (rango de USD 2,50 a 8,00 por kg; Suaid Global, 2026), más USD 300 de agencia y seguro por envío de 1.000 unidades</td></tr>
                <tr><td>Arancel (según el TLC del paso 4)</td><td>0,00</td><td class="col-cop">$0</td><td>El acuerdo con la UE deja el producto libre de arancel; además, la subpartida 3304 99 00 tiene arancel de 0 % para cualquier origen (Celna24, s. f.)</td></tr>
                <tr class="pe-total-row"><td>Costo total por unidad</td><td>6,73</td><td class="col-cop">$22.189</td><td>Suma de los conceptos anteriores</td></tr>
                <tr class="pe-total-row"><td>Precio de venta propuesto</td><td>14,00</td><td class="col-cop">$46.159</td><td>Precio al importador puesto en Fráncfort (CIP); equivale a un precio al público cercano a 35,90 € con IVA</td></tr>
                <tr class="pe-total-row"><td>Margen (%)</td><td>51,9 %</td><td class="col-cop">51,9 %</td><td>(14,00 − 6,73) ÷ 14,00 × 100</td></tr>
              </tbody>
            </table>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 14.000</span>
              <span class="pe-kpi-lbl">ingresos del primer envío de 1.000 unidades (≈ $46,2 M)</span>
            </div>
            <div class="pe-kpi-card">
              <span class="pe-kpi-val">USD 7.270</span>
              <span class="pe-kpi-lbl">utilidad bruta del primer envío (≈ $24,0 M)</span>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.9",
        indexTitle: "3.9 Paso 10 · Supuestos (Tabla 18)",
        title: "Paso 10 · Supuestos detrás del costo (Tabla 18)",
        keyMessage: "Cada cifra tiene un cálculo o una fuente: nada está puesto «a ojo».",
        priority: "Prioridad alta",
        source: "Tabla 18, con las fuentes indicadas en cada fila.",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Concepto</th><th>Cálculo</th><th>Valor (USD)</th></tr>
              </thead>
              <tbody>
                <tr><td>Mano de obra directa (variable por lote)</td><td>Dos operarios durante cuatro días por lote. Costo mensual por operario de $2.910.471: salario mínimo de $1.750.905 con 52 % de prestaciones y seguridad social (supuesto) más auxilio de transporte de $249.095 (Consultorsalud, 2025)</td><td>0,16 por unidad</td></tr>
                <tr><td>Uso de planta del maquilador (variable por lote)</td><td>$2.500.000 por lote de 1.500 unidades (supuesto del grupo)</td><td>0,51 por unidad</td></tr>
                <tr><td>Análisis de calidad (variable por lote)</td><td>$1.200.000 por lote: ácidos grasos, peróxidos y microbiología (supuesto del grupo)</td><td>0,24 por unidad</td></tr>
                <tr><td>Certificación COSMOS Natural (fijo año 1)</td><td>£1.612 en tarifas de solicitud, inspección, revisión del producto y registro (Soil Association, 2026), más USD 1.200 de viáticos de inspección internacional (supuesto)</td><td>3.368</td></tr>
                <tr><td>NSO del Invima (fijo año 1)</td><td>292,83 UVB × $12.110 = $3.546.171 (Consultorsalud, 2026; Siempre al Día, 2026). Se incluye por prudencia: se necesita si el sérum también se vende en Colombia o en la Comunidad Andina</td><td>1.076</td></tr>
                <tr><td>Informe de seguridad (CPSR) y notificación CPNP (fijo año 1)</td><td>900 €, punto medio del rango de 400 a 1.500 € de consultores independientes (Global Cosmetic Regs, 2026)</td><td>1.014</td></tr>
                <tr><td>Persona responsable en la UE — un año (fijo año 1)</td><td>500 €, dentro del rango de 200 a 800 € por producto al año (Care Europe, s. f.)</td><td>563</td></tr>
                <tr><td>Registro de marca (fijo año 1)</td><td>SIC: $1.348.500 por una clase (Universidad de los Andes, 2026). EUIPO: 850 € por una clase (Harris Sliwoski, s. f.)</td><td>1.367</td></tr>
                <tr class="pe-total-row"><td>Total certificaciones y permisos</td><td>Se reparte entre las 3.000 unidades del primer año: USD 2,46 por unidad</td><td>7.388</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.10",
        indexTitle: "3.10 Paso 10 · ¿Dónde se va el costo?",
        title: "Paso 10 · ¿Dónde se va el costo?",
        keyMessage: "Lo que más pesa no es el aceite sino las certificaciones: el 37 % del costo.",
        priority: "Prioridad alta",
        source: "Gráfico 3: elaboración propia con base en las Tablas 17 y 18.",
        html: `
          <ul style="padding-left:22px; font-size:0.96rem; display:grid; gap:4px;">
            <li>Las certificaciones son costos fijos: con solo 3.000 unidades pesan mucho sobre cada frasco, pero se diluyen a medida que crece el volumen.</li>
            <li>El arancel no pesa nada: confirma que el obstáculo para entrar a Europa es cumplir la regulación, no el impuesto aduanero.</li>
          </ul>
          <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:20px; align-items:center;">
            <div class="pe-table-wrap">
              <table class="pe-table">
                <thead>
                  <tr><th>Concepto</th><th>USD por unidad</th><th>Participación (cálculo propio)</th></tr>
                </thead>
                <tbody>
                  <tr class="pe-highlight-row"><td>Certificaciones y permisos</td><td>2,46</td><td>36,6 %</td></tr>
                  <tr><td>Materia prima</td><td>1,45</td><td>21,5 %</td></tr>
                  <tr><td>Transporte internacional</td><td>0,96</td><td>14,3 %</td></tr>
                  <tr><td>Empaque y etiquetado</td><td>0,95</td><td>14,1 %</td></tr>
                  <tr><td>Transformación y mano de obra</td><td>0,91</td><td>13,5 %</td></tr>
                  <tr><td>Arancel</td><td>0,00</td><td>0,0 %</td></tr>
                  <tr class="pe-total-row"><td>Total</td><td>6,73</td><td>100 %</td></tr>
                </tbody>
              </table>
            </div>
            <div class="pe-chart-box">
              <div class="pe-chart-title">Gráfico 3: Desglose del costo por unidad (USD 6,73)</div>
              <div class="pe-hbar-list">
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Certificaciones y permisos</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill highlight" style="width:100%;"></div></div>
                  <div class="pe-hbar-val">USD 2,46</div>
                </div>
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Materia prima</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:58.9%;"></div></div>
                  <div class="pe-hbar-val">USD 1,45</div>
                </div>
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Transporte internacional</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:39%;"></div></div>
                  <div class="pe-hbar-val">USD 0,96</div>
                </div>
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Empaque y etiquetado</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:38.6%;"></div></div>
                  <div class="pe-hbar-val">USD 0,95</div>
                </div>
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Transformación y M.O.</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:37%;"></div></div>
                  <div class="pe-hbar-val">USD 0,91</div>
                </div>
                <div class="pe-hbar-row" style="grid-template-columns:190px 1fr 75px;">
                  <div class="pe-hbar-label">Arancel de entrada a la UE</div>
                  <div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:1%;"></div></div>
                  <div class="pe-hbar-val">USD 0,00</div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.11",
        indexTitle: "3.11 Paso 10 · Cómo se forma el precio",
        title: "Paso 10 · Cómo se forma el precio",
        keyMessage: "Hicimos el camino al revés, desde la góndola: 35,90 € en tienda = USD 14,00 para nosotros.",
        priority: "Prioridad alta",
        source: "Elaboración propia (Paso 10); 1 € = USD 1,1267 (Interactive Crypto, 2026).",
        html: `
          <div class="pe-table-wrap">
            <table class="pe-table">
              <thead>
                <tr><th>Paso</th><th>Cálculo</th><th>Resultado</th></tr>
              </thead>
              <tbody>
                <tr><td>Precio al público en Alemania (con IVA)</td><td>Precio sugerido</td><td>35,90 €</td></tr>
                <tr><td>Quitar el IVA alemán del 19 %</td><td>35,90 ÷ 1,19</td><td>30,17 €</td></tr>
                <tr><td>Margen de la tienda (45 %, supuesto)</td><td>30,17 × 0,55</td><td>16,59 €</td></tr>
                <tr><td>Margen del distribuidor (25 %, supuesto)</td><td>16,59 × 0,75</td><td>12,44 €</td></tr>
                <tr class="pe-total-row"><td>Lo que nos paga el importador</td><td>12,44 € × 1,1267</td><td>USD 14,02 → USD 14,00</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:0.95rem;">
            <strong>Reparto de los 35,90 € (cálculo propio con los mismos supuestos):</strong> IVA 5,73 € · tienda 13,58 € · distribuidor 4,15 € · nuestro margen 6,47 € · nuestro costo 5,97 € (USD 6,73).
          </p>
          <div class="pe-chart-box">
            <div class="pe-stacked-bar-labels">
              <span><strong>Nuestro costo:</strong> 5,97 €</span>
              <span><strong>Nuestro margen:</strong> 6,47 €</span>
              <span><strong>Distribuidor (25 %):</strong> 4,15 €</span>
              <span><strong>Margen tienda (45 %):</strong> 13,58 €</span>
              <span><strong>IVA alemán (19 %):</strong> 5,73 €</span>
            </div>
            <div class="pe-stacked-bar">
              <div class="pe-stacked-seg" style="width:16.6%; background:#1F4E3D;" title="Nuestro costo: 5,97 €">5,97 €</div>
              <div class="pe-stacked-seg" style="width:18.0%; background:#3E7A62;" title="Nuestro margen: 6,47 €">6,47 €</div>
              <div class="pe-stacked-seg" style="width:11.6%; background:#76A890; color:#1A2420;" title="Distribuidor: 4,15 €">4,15 €</div>
              <div class="pe-stacked-seg" style="width:37.8%; background:#9EC2B0; color:#1A2420;" title="Margen de la tienda: 13,58 €">13,58 €</div>
              <div class="pe-stacked-seg" style="width:16.0%; background:#D9DFDC; color:#1A2420;" title="IVA alemán: 5,73 €">5,73 €</div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.12",
        indexTitle: "3.12 Paso 10 · ¿Es competitivo el precio?",
        title: "Paso 10 · ¿Es competitivo nuestro precio?",
        keyMessage: "Siendo honestos: no frente al argán. Pero no vendemos materia prima sino un producto certificado con origen comprobable.",
        priority: "Prioridad alta",
        source: "Shop Apotheke (s. f.-a, s. f.-b, s. f.-c); Mi Cosmética Casera (s. f.); Farmatodo (s. f.); Falabella (s. f.). Precios en pesos convertidos con la TRM y la tasa euro-dólar indicadas.",
        html: `
          <div style="display:grid; grid-template-columns:1.05fr 0.95fr; gap:18px; align-items:start;">
            <div class="pe-table-wrap">
              <table class="pe-table" style="font-size:15px;">
                <thead>
                  <tr><th>Producto (30 ml)</th><th>Dónde</th><th>Precio al público</th></tr>
                </thead>
                <tbody>
                  <tr><td>Dr. Scheller, aceite de argán</td><td>Shop Apotheke, Alemania</td><td>8,49 €</td></tr>
                  <tr><td>The Ordinary, rosa mosqueta</td><td>Shop Apotheke, Alemania</td><td>12,50 €</td></tr>
                  <tr><td>Primavera, argán orgánico</td><td>Shop Apotheke, Alemania</td><td>14,90 €</td></tr>
                  <tr><td>Aceite de cacay puro (ref. sección 3.4)</td><td>Tienda materias primas, España</td><td>20,72 €</td></tr>
                  <tr class="pe-highlight-row"><td>Cacay Amazon Origin Sérum</td><td>Precio al público sugerido</td><td>35,90 €</td></tr>
                  <tr><td>CaryO, aceite de cacay</td><td>Farmatodo, Colombia ($148.000)</td><td>≈ 39,84 €</td></tr>
                  <tr><td>Kahai Oil, aceite de cacay</td><td>Falabella, Colombia ($175.000)</td><td>≈ 47,11 €</td></tr>
                </tbody>
              </table>
            </div>
            <div class="pe-chart-box">
              <div class="pe-chart-title">Gráfico 4: Comparación de precios por 30 ml</div>
              <div class="pe-hbar-list">
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">Dr. Scheller (argán)</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:18%;"></div></div><div class="pe-hbar-val">8,49 €</div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">The Ordinary (mosqueta)</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:26.5%;"></div></div><div class="pe-hbar-val">12,50 €</div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">Primavera (argán bio)</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:31.6%;"></div></div><div class="pe-hbar-val">14,90 €</div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">Cacay puro (España)</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:44%;"></div></div><div class="pe-hbar-val">20,72 €</div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label"><strong>Cacay Amazon Origin</strong></div><div class="pe-hbar-track"><div class="pe-hbar-fill highlight" style="width:76.2%;"></div></div><div class="pe-hbar-val"><strong>35,90 €</strong></div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">CaryO (Colombia)*</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:84.6%;"></div></div><div class="pe-hbar-val">≈ 39,84 €</div></div>
                <div class="pe-hbar-row" style="grid-template-columns:165px 1fr 70px;"><div class="pe-hbar-label">Kahai Oil (Colombia)*</div><div class="pe-hbar-track"><div class="pe-hbar-fill" style="width:100%;"></div></div><div class="pe-hbar-val">≈ 47,11 €</div></div>
              </div>
            </div>
          </div>
          <ul style="padding-left:22px; font-size:0.92rem; display:grid; gap:3px;">
            <li>Nuestro precio es más del doble que el argán y la rosa mosqueta, y un 73 % más alto que el cacay puro de la tienda española.</li>
            <li><strong>Lo justifica:</strong> producto terminado, certificado, con marca, con origen rastreable y de un ingrediente casi desconocido en Europa.</li>
            <li>Queda por debajo de las marcas colombianas de cacay en su propio país. Por eso el canal no es el masivo sino tiendas naturales y farmacias especializadas.</li>
          </ul>
        `
      },
      {
        code: "DIAPOSITIVA 3.13a",
        indexTitle: "3.13a Paso 11 · Mapa de calor de riesgos",
        title: "Paso 11 · Mapa de calor probabilidad × impacto",
        keyMessage: "Los tres riesgos de impacto alto dependen de nosotros y se controlan con procedimientos.",
        priority: "Prioridad alta",
        source: "Tabla 19: Dólar Hoy (2026); El Colombiano (2026); Comisión Europea (2024); Mi Cosmética Casera (s. f.); eAduana (2026); iContainers (s. f.); Shop Apotheke (s. f.-a, -b, -c); El Peruano (2026); The Tico Times (s. f.); Radio Nacional de Colombia (s. f.-b).",
        html: `
          <p style="font-size:0.95rem;">Haz clic sobre cualquier riesgo en el mapa de calor para inspeccionar su detalle y mitigación:</p>
          <div class="pe-heatmap-layout">
            <div class="pe-heatmap-grid">
              <div style="font-weight:700; display:flex; align-items:center; justify-content:flex-end; padding-right:8px;">Prob. Alta</div>
              <div class="pe-hm-cell pe-hm-low"></div>
              <div class="pe-hm-cell pe-hm-med">
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(5)">5. Competencia internacional</button>
              </div>
              <div class="pe-hm-cell pe-hm-high"></div>

              <div style="font-weight:700; display:flex; align-items:center; justify-content:flex-end; padding-right:8px;">Prob. Media</div>
              <div class="pe-hm-cell pe-hm-low"></div>
              <div class="pe-hm-cell pe-hm-med">
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(1)">1. Cambiario</button>
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(4)">4. Logístico</button>
              </div>
              <div class="pe-hm-cell pe-hm-high">
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(2)">2. Normativo</button>
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(3)">3. Sanitario</button>
                <button type="button" class="pe-risk-chip" onclick="showRiskDetail(6)">6. Abastecimiento</button>
              </div>

              <div style="font-weight:700; display:flex; align-items:center; justify-content:flex-end; padding-right:8px;">Prob. Baja</div>
              <div class="pe-hm-cell pe-hm-low"></div>
              <div class="pe-hm-cell pe-hm-low"></div>
              <div class="pe-hm-cell pe-hm-med"></div>

              <div></div>
              <div style="text-align:center; font-weight:700; color:#1F4E3D;">Impacto Bajo</div>
              <div style="text-align:center; font-weight:700; color:#1F4E3D;">Impacto Medio</div>
              <div style="text-align:center; font-weight:700; color:#1F4E3D;">Impacto Alto</div>
            </div>

            <div class="pe-kpi-card" id="risk-inspector-box" style="min-height:280px; display:flex; flex-direction:column; justify-content:center;">
              <span style="font-size:0.8rem; font-weight:700; color:#3E7A62; text-transform:uppercase;">Riesgo seleccionado (clic en el mapa)</span>
              <h4 id="risk-insp-title" style="font-family:var(--pe-serif); font-size:1.6rem; color:#1F4E3D; margin:6px 0;">2. Riesgo Normativo (Media / Alto)</h4>
              <p id="risk-insp-desc" style="font-size:0.93rem; margin-bottom:10px;">Cambia la norma europea o una afirmación de la etiqueta no se puede sustentar. El Reglamento (UE) 2024/996 limita el retinol a 0,3 % en productos faciales y exige advertencia sobre la vitamina A.</p>
              <div style="background:#fff; padding:10px 14px; border-radius:8px; border:1px solid #BFBFBF; font-size:0.92rem;">
                <strong>¿Cómo lo mitigamos?</strong>
                <p id="risk-insp-mit" style="margin-top:4px;">No usar «retinol» en la etiqueta hasta medirlo; revisión de cada afirmación en el CPSR; alerta de la persona responsable sobre cambios en los anexos.</p>
              </div>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.13b",
        indexTitle: "3.13b Paso 11 · Matriz de riesgos (Tabla 19)",
        title: "Paso 11 · Matriz de riesgos completa (Tabla 19)",
        keyMessage: "Seis riesgos analizados con tipo, probabilidad, impacto y plan de mitigación.",
        priority: "Prioridad alta",
        source: "Tabla 19: Dólar Hoy (2026); El Colombiano (2026); Comisión Europea (2024); Mi Cosmética Casera (s. f.); eAduana (2026); iContainers (s. f.); Shop Apotheke (s. f.-a, -b, -c); El Peruano (2026); The Tico Times (s. f.); Radio Nacional de Colombia (s. f.-b).",
        html: `
          <div class="pe-table-wrap" style="max-height:430px; overflow-y:auto;">
            <table class="pe-table" style="font-size:15.5px;">
              <thead>
                <tr><th>Riesgo</th><th>Tipo</th><th>Probabilidad</th><th>Impacto</th><th>¿Cómo lo mitigamos?</th></tr>
              </thead>
              <tbody>
                <tr><td>1. El peso se revalúa y cada venta en dólares deja menos pesos. La TRM del 12 de noviembre de 2026 ($3.297,07) es 12,3 % menor que la de un año antes; Bancolombia la esperaba entre $3.120 y $3.300 en noviembre</td><td>Cambiario</td><td>Media</td><td>Medio</td><td>Fijar el precio en dólares en el contrato, cubrir cada pedido con un forward bancario y revisar precios cada seis meses. Una caída de 10 % en la TRM quitaría unos $4.600 por frasco</td></tr>
                <tr class="pe-highlight-row"><td>2. Cambia la norma europea o una afirmación de la etiqueta no se puede sustentar. El Reglamento (UE) 2024/996 limita el retinol a 0,3 % en productos faciales y exige advertencia sobre la vitamina A</td><td>Normativo</td><td>Media</td><td>Alto</td><td>No usar «retinol» en la etiqueta hasta medirlo; revisión de cada afirmación en el CPSR; alerta de la persona responsable sobre cambios en los anexos</td></tr>
                <tr class="pe-highlight-row"><td>3. Un lote se oxida o sale distinto y el importador lo rechaza (72,7 % de ácido linoleico, grasa poliinsaturada que se oxida con luz y calor)</td><td>Sanitario</td><td>Media</td><td>Alto</td><td>Frasco ámbar, vitamina E, análisis de peróxidos por lote, bodega fresca y fecha PAO en la etiqueta</td></tr>
                <tr><td>4. Se rompen frascos o el envío se demora o encarece (capacidad aérea limitada en 2026; recargos en noviembre y diciembre)</td><td>Logístico</td><td>Media</td><td>Medio</td><td>Separadores de cartón, seguro, tarifa cerrada con agente de carga y evitar noviembre–diciembre y los picos de flores (enero–febrero y abril–mayo)</td></tr>
                <tr><td>5. Los compradores prefieren aceites conocidos y más baratos (8,49 a 14,90 € por 30 ml en Alemania) y Perú promueve sus ingredientes amazónicos</td><td>Competencia internacional</td><td>Alta</td><td>Medio</td><td>No competir por precio: tiendas naturales y farmacias especializadas, muestras, trazabilidad y estudios independientes</td></tr>
                <tr class="pe-highlight-row"><td>6. Falta nuez o aceite: la cosecha va de febrero a abril y en el Meta solo dos empresas extraen aceite en frío</td><td>Abastecimiento</td><td>Media</td><td>Alto</td><td>Contrato anual con compra anticipada en cosecha, inventario de seguridad de seis meses y segundo proveedor (Tacay o CaryO)</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.14",
        indexTitle: "3.14 Paso 11 · Lectura de la matriz",
        title: "Paso 11 · Lectura de la matriz",
        keyMessage: "El riesgo cambiario no lo controlamos, pero sí lo podemos cubrir; el de competencia ya lo asumíamos desde la Fase 2.",
        priority: "Prioridad alta",
        source: "Elaboración propia a partir de la Tabla 19.",
        html: `
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:18px;">
            <div class="pe-kpi-card" style="border-left-width:6px;">
              <span class="pe-kpi-val" style="font-size:1.85rem;">«Lo controlamos»</span>
              <p style="margin-top:8px; font-size:0.96rem;">
                <strong>Impacto alto: normativo, sanitario y abastecimiento.</strong> Dependen de nosotros: medir el lote, no prometer lo que no se ha comprobado y asegurar la nuez en cosecha cuesta poco frente a perder un pedido.
              </p>
            </div>
            <div class="pe-kpi-card" style="border-left-color:#3E7A62; border-left-width:6px;">
              <span class="pe-kpi-val" style="font-size:1.85rem; color:#3E7A62;">«Lo cubrimos»</span>
              <p style="margin-top:8px; font-size:0.96rem;">
                <strong>Cambiario:</strong> no se controla, se cubre (forward bancario por cada pedido y revisión semestral de precios).
              </p>
            </div>
            <div class="pe-kpi-card" style="border-left-color:#8FB8A3; border-left-width:6px;">
              <span class="pe-kpi-val" style="font-size:1.85rem; color:#2C5B48;">«Lo asumimos»</span>
              <p style="margin-top:8px; font-size:0.96rem;">
                <strong>Competencia:</strong> es el más probable, pero nunca planteamos ganarle al argán por precio sino diferenciarnos en tiendas naturales y farmacias especializadas.
              </p>
            </div>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.15",
        indexTitle: "3.15 Conclusiones y recomendaciones",
        title: "Conclusiones y recomendaciones",
        keyMessage: "El cacay prueba, a pequeña escala, que la biodiversidad puede exportarse con marca y con margen.",
        priority: "Prioridad alta",
        source: "Elaboración propia con base en las Tablas 14 a 19.",
        html: `
          <div style="display:grid; grid-template-columns:repeat(6, 1fr); gap:10px;">
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">USD 6,73</span><span class="pe-kpi-lbl">costo por frasco</span></div>
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">USD 14,00</span><span class="pe-kpi-lbl">precio al importador</span></div>
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">51,9 %</span><span class="pe-kpi-lbl">margen</span></div>
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">USD 1,30</span><span class="pe-kpi-lbl">valor como ingrediente</span></div>
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">0 %</span><span class="pe-kpi-lbl">arancel de entrada a la UE</span></div>
            <div class="pe-kpi-card" style="padding:12px;"><span class="pe-kpi-val" style="font-size:1.5rem;">Mes 9</span><span class="pe-kpi-lbl">primer envío</span></div>
          </div>
          <p style="font-size:0.93rem;">
            <strong>Lo que el plan aún no demuestra:</strong> varios costos son supuestos y no cotizaciones, el precio depende de que una tienda alemana acepte venderlo a 35,90 € y las ventajas frente al argán siguen siendo afirmaciones de las empresas.
          </p>
          <div class="pe-table-wrap">
            <table class="pe-table" style="font-size:15.5px;">
              <thead>
                <tr><th>#</th><th>Recomendación</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><strong>Cambiar supuestos por cotizaciones:</strong> precios reales del aceite, frasco, maquila y flete, y confirmar con la DIAN la subpartida de exportación.</td></tr>
                <tr><td>2</td><td><strong>Respaldar con ciencia lo que se promete:</strong> estudios de eficacia independientes y medir la vitamina A para cumplir el Reglamento (UE) 2024/996.</td></tr>
                <tr><td>3</td><td><strong>Cuidar el primer eslabón:</strong> acuerdo de compra con Asprocacay a precio justo y volumen fijo.</td></tr>
                <tr><td>4</td><td><strong>Apoyarse en lo institucional:</strong> ProColombia para ferias y ruedas de negocio; Colombian B2B Marketplace para llegar a compradores.</td></tr>
                <tr><td>5</td><td><strong>Crecer para diluir los costos fijos:</strong> las certificaciones son el 37 % del costo con 3.000 unidades; solo después abrir EE. UU. con los requisitos de MoCRA.</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        code: "DIAPOSITIVA 3.16",
        indexTitle: "3.16 Referencias Fase 3 y uso de IA",
        title: "Referencias de la Fase 3 y uso de IA",
        keyMessage: "Última diapositiva: referencias APA 7 y la nota sobre inteligencia artificial que pide la profesora.",
        priority: "Prioridad alta",
        source: "Formato APA 7 — Fase 3.",
        html: `
          <div class="pe-ref-list" style="max-height:310px;">
            <ol>
              <li>Care Europe. (s. f.). <em>EU Responsible Person for cosmetics: Full legal obligations</em>. <a href="https://care-europe-website.pages.dev/blog/eu-responsible-person-cosmetics-legal-obligations/" target="_blank" rel="noopener">https://care-europe-website.pages.dev/blog/eu-responsible-person-cosmetics-legal-obligations/</a></li>
              <li>Caynut. (s. f.). <em>Nourishing Cacay Oil</em> [Folleto]. ConnectAmericas. <a href="https://connectamericas.com/sites/default/files/company_files/BROCHURE%20CAYNUT%20ES_0.pdf" target="_blank" rel="noopener">https://connectamericas.com/sites/default/files/company_files/BROCHURE%20CAYNUT%20ES_0.pdf</a></li>
              <li>Celna24. (s. f.). <em>Customs tariff 3304 99: Other beauty or make-up preparations</em>. <a href="https://celna24.pl/customs-tariff/330499" target="_blank" rel="noopener">https://celna24.pl/customs-tariff/330499</a></li>
              <li>Chilat. (s. f.). <em>Frasco cuentagotas al por mayor</em>. <a href="https://www.chilat.com/h5/al-por-mayor/frasco-cuentagotas" target="_blank" rel="noopener">https://www.chilat.com/h5/al-por-mayor/frasco-cuentagotas</a></li>
              <li>Comisión Europea. (2024). Reglamento (UE) 2024/996 de la Comisión, de 3 de abril de 2024, que modifica el Reglamento (CE) n.º 1223/2009 en lo relativo al uso de la vitamina A, la alfa-arbutina, la arbutina y determinadas sustancias con posibles propiedades de alteración endocrina en los productos cosméticos. <em>Diario Oficial de la Unión Europea</em>, L 2024/996. <a href="http://data.europa.eu/eli/reg/2024/996/oj" target="_blank" rel="noopener">http://data.europa.eu/eli/reg/2024/996/oj</a></li>
              <li>Consultorsalud. (2025, 30 de diciembre). <em>Aumento del salario mínimo en Colombia 2026: esto es lo que debe saber (decretos 1469 y 1470 de 2025)</em>. <a href="https://consultorsalud.com/aumento-del-salario-minimo-en-colombia-2026/" target="_blank" rel="noopener">https://consultorsalud.com/aumento-del-salario-minimo-en-colombia-2026/</a></li>
              <li>Consultorsalud. (2026). <em>Tarifas Invima 2026 cambian con la Resolución 2026058314 para alimentos, medicamentos y cosméticos</em>. <a href="https://consultorsalud.com/resolucion-2026058314-2026-tarifas-invima/" target="_blank" rel="noopener">https://consultorsalud.com/resolucion-2026058314-2026-tarifas-invima/</a></li>
              <li>Dólar Hoy. (2026, 12 de noviembre). <em>TRM del jueves 12 de noviembre del 2026</em>. <a href="https://www.dolarhoy.co/2026-11-12" target="_blank" rel="noopener">https://www.dolarhoy.co/2026-11-12</a></li>
              <li>eAduana. (2026, 19 de octubre). <em>La crisis del combustible pone a prueba el transporte aéreo</em>. <a href="https://www.eaduana.com/articulos/la-crisis-del-combustible-pone-a-prueba-el-transporte-aereo" target="_blank" rel="noopener">https://www.eaduana.com/articulos/la-crisis-del-combustible-pone-a-prueba-el-transporte-aereo</a></li>
              <li>El Colombiano. (2026, 4 de noviembre). <em>¿En cuánto estará el dólar en Colombia durante noviembre?</em> <a href="https://www.elcolombiano.com/inicio/dolar-colombia-proyeccion-tasa-cambio-noviembre-2026-GF43201403" target="_blank" rel="noopener">https://www.elcolombiano.com/inicio/dolar-colombia-proyeccion-tasa-cambio-noviembre-2026-GF43201403</a></li>
              <li>El Peruano. (2026). <em>Ingredientes peruanos en la industria cosmética</em>. <a href="https://www.elperuano.pe/noticia/293866-ingredientes-peruanos-en-la-industria-cosmetica" target="_blank" rel="noopener">https://www.elperuano.pe/noticia/293866-ingredientes-peruanos-en-la-industria-cosmetica</a></li>
              <li>EventsEye. (s. f.). <em>Belleza y Salud 2027</em>. <a href="https://www.eventseye.com/fairs/f-belleza-y-salud-11223-1.html" target="_blank" rel="noopener">https://www.eventseye.com/fairs/f-belleza-y-salud-11223-1.html</a></li>
              <li>Falabella. (s. f.). <em>Kahai Oil – 100 % aceite de cacay</em>. <a href="https://www.falabella.com.co/falabella-co/product/122205642/Kahai-Oil-100-Aceite-de-Cacay/122205643" target="_blank" rel="noopener">https://www.falabella.com.co/falabella-co/product/122205642/Kahai-Oil-100-Aceite-de-Cacay/122205643</a></li>
              <li>Farmatodo. (s. f.). <em>Aceite de cacay, retinol + ácido linoleico + vitamina E x 30 ml CaryO</em>. <a href="https://www.farmatodo.com.co/producto/500024362-aceite-de-cacay--retinol---acido-linoleico---vitamina-e-x-30ml-caryo-gotero-x-ml" target="_blank" rel="noopener">https://www.farmatodo.com.co/producto/500024362-aceite-de-cacay--retinol---acido-linoleico---vitamina-e-x-30ml-caryo-gotero-x-ml</a></li>
              <li>FXStreet. (2026, 10 de noviembre). <em>Previsão de preços para o GBP/USD: os otimistas da libra não conseguem manter a tendência acima de 1,3450</em>. OANDA. <a href="https://www.oanda.com/eu-pt/node/370062" target="_blank" rel="noopener">https://www.oanda.com/eu-pt/node/370062</a></li>
              <li>Global Cosmetic Regs. (2026). <em>How to get CPSR: Cost, requirements & step-by-step guide</em>. <a href="https://www.globalcosmeticregs.com/guides/eu/how-to-get-cpsr" target="_blank" rel="noopener">https://www.globalcosmeticregs.com/guides/eu/how-to-get-cpsr</a></li>
              <li>Harris Sliwoski. (s. f.). <em>Registro de una marca comercial en la Unión Europea: lo que necesita saber</em>. <a href="https://harris-sliwoski.com/es/blog/registering-a-trademark-in-the-european-union-what-you-need-to-know/" target="_blank" rel="noopener">https://harris-sliwoski.com/es/blog/registering-a-trademark-in-the-european-union-what-you-need-to-know/</a></li>
              <li>IBD Ciencia. (s. f.). <em>Frasco com conta-gotas, vidro âmbar, 30 ml</em>. <a href="https://www.ibdciencia.com/pt/frascos-cuentagotas/4448-frasco-com-conta-gotas.html" target="_blank" rel="noopener">https://www.ibdciencia.com/pt/frascos-cuentagotas/4448-frasco-com-conta-gotas.html</a></li>
              <li>iContainers. (s. f.). <em>Transporte aéreo desde y hacia Colombia</em>. <a href="https://www.icontainers.com/es/transporte-aereo/colombia/" target="_blank" rel="noopener">https://www.icontainers.com/es/transporte-aereo/colombia/</a></li>
              <li>in-cosmetics Global. (2026). <em>Venue and travel: in-cosmetics Global, 6-8 April 2027, Fira Barcelona</em>. <a href="https://www.in-cosmetics.com/global/en-gb/visit/venue-and-travel.html" target="_blank" rel="noopener">https://www.in-cosmetics.com/global/en-gb/visit/venue-and-travel.html</a></li>
              <li>Interactive Crypto. (2026, 5 de noviembre). <em>Inflación en la eurozona impulsa al EUR/USD por encima de 1,1260</em>. <a href="https://www.interactivecrypto.com/es/inflacion-en-la-eurozona-impulsa-al-eur-usd-por-encima-de-1-1260-riesgo-frances-a-la-vista" target="_blank" rel="noopener">https://www.interactivecrypto.com/es/inflacion-en-la-eurozona-impulsa-al-eur-usd-por-encima-de-1-1260-riesgo-frances-a-la-vista</a></li>
              <li>Kahai. (2024, 3 de julio). <em>Cacay: la nuez de la belleza que causa furor</em>. <a href="https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/" target="_blank" rel="noopener">https://kahai.co/2024/07/03/cacay-la-nuez-de-la-belleza-que-causa-furor/</a></li>
              <li>Mi Cosmética Casera. (s. f.). <em>Aceite de cacay 1.ª presión en frío BIO</em> (ficha de producto). <a href="https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/" target="_blank" rel="noopener">https://www.micosmeticacasera.es/aceite-de-cacay-virgen-bio/</a></li>
              <li>Nature In Bottle. (s. f.). <em>Cacay (Kahai) oil</em>. <a href="https://www.natureinbottle.com/product/cacay_kahai_oil" target="_blank" rel="noopener">https://www.natureinbottle.com/product/cacay_kahai_oil</a></li>
              <li>ProColombia. (2019, 10 de abril). <em>Ingredientes naturales colombianos con los ojos puestos en conquistar el mercado</em>. <a href="https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado" target="_blank" rel="noopener">https://prensa.procolombia.co/ingredientes-naturales-colombianos-con-los-ojos-puestos-en-conquistar-el-mercado</a></li>
              <li>ProColombia. (2026, 20 de agosto). <em>Rueda de Negocios de ProColombia en la Feria de Belleza y Salud dejó negocios y expectativas por más de USD 1,7 millones</em>. <a href="https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones" target="_blank" rel="noopener">https://procolombia.co/sala-de-prensa/noticias/rueda-de-negocios-de-procolombia-en-la-feria-de-belleza-y-salud-dejo-negocios-y-expectativas-por-mas-de-usd-17-millones</a></li>
              <li>Radio Nacional de Colombia. (s. f.-a). <em>Árbol de cacay: el legado ancestral que cultivan los campesinos en Lejanías, Meta</em>. <a href="https://radionacional.co/noticias-colombia/arbol-de-cacay-el-legado-ancestral-que-cultivan-los-campesinos-en-lejanias-meta" target="_blank" rel="noopener">https://radionacional.co/noticias-colombia/arbol-de-cacay-el-legado-ancestral-que-cultivan-los-campesinos-en-lejanias-meta</a></li>
              <li>Radio Nacional de Colombia. (s. f.-b). <em>El cacay del Meta: árbol endémico que revoluciona la economía</em>. <a href="https://radionacional.co/noticias-colombia/el-cacay-del-meta-arbol-endemico-que-revoluciona-la-economia" target="_blank" rel="noopener">https://radionacional.co/noticias-colombia/el-cacay-del-meta-arbol-endemico-que-revoluciona-la-economia</a></li>
              <li>Registrar Corp. (s. f.). <em>Reglamento de la UE 1223/2009 (Reglamento n.º (CE) 1223/2009)</em>. <a href="https://www.registrarcorp.com/es/blog/cosmetics/cosmetic-regulations/eu-regulation-1223-2009-regulation-no-ec-1223-2009/" target="_blank" rel="noopener">https://www.registrarcorp.com/es/blog/cosmetics/cosmetic-regulations/eu-regulation-1223-2009-regulation-no-ec-1223-2009/</a></li>
              <li>Semana. (2020, 1 de diciembre). <em>Historia de Kahai que exportan nuez cacay en Colombia</em>. <a href="https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/" target="_blank" rel="noopener">https://www.semana.com/emprendimiento/multimedia/historia-de-kahai-que-exportan-nuez-cacay-en-colombia/258654/</a></li>
              <li>Shop Apotheke. (s. f.-a). <em>Dr. Scheller Reines Arganöl, 30 ml</em>. <a href="https://www.shop-apotheke.com/beauty/18271219/dr-scheller-reines-arganoel.htm" target="_blank" rel="noopener">https://www.shop-apotheke.com/beauty/18271219/dr-scheller-reines-arganoel.htm</a></li>
              <li>Shop Apotheke. (s. f.-b). <em>The Ordinary 100 % Organic Cold-Pressed Rose Hip Seed Oil, 30 ml</em>. <a href="https://www.shop-apotheke.com/beauty/BE04658043/the-ordinary-100-organic-cold-pressed-rose-hip-seed-oil.htm" target="_blank" rel="noopener">https://www.shop-apotheke.com/beauty/BE04658043/the-ordinary-100-organic-cold-pressed-rose-hip-seed-oil.htm</a></li>
              <li>Shop Apotheke. (s. f.-c). <em>Primavera Arganöl bio, 30 ml</em>. <a href="https://www.shop-apotheke.com/beauty/18195004/primavera-arganoel-bio.htm" target="_blank" rel="noopener">https://www.shop-apotheke.com/beauty/18195004/primavera-arganoel-bio.htm</a></li>
              <li>Siempre al Día. (2026). <em>¿Cuál es el valor de la UVB 2026?</em> <a href="https://siemprealdia.co/colombia/impuestos/uvb-fue-fijada-por-el-ministerio-de-hacienda/" target="_blank" rel="noopener">https://siemprealdia.co/colombia/impuestos/uvb-fue-fijada-por-el-ministerio-de-hacienda/</a></li>
              <li>Soil Association. (2026). <em>Fees for certification of health & beauty products to COSMOS and SA standards 2026-27</em>. <a href="https://www.soilassociation.org/media/28900/fees-for-certification-of-health-beauty-products-to-cosmos-and-sa-standards-2026-27.pdf" target="_blank" rel="noopener">https://www.soilassociation.org/media/28900/fees-for-certification-of-health-beauty-products-to-cosmos-and-sa-standards-2026-27.pdf</a></li>
              <li>Suaid Global. (2026). <em>Costo de flete aéreo por kg: tarifas y guía de precios 2026</em>. <a href="https://suaidglobal.com/es/insights/air-freight-cost-per-kg/" target="_blank" rel="noopener">https://suaidglobal.com/es/insights/air-freight-cost-per-kg/</a></li>
              <li>Tacay Natural Oils. (s. f.). <em>Aceite de cacay 1 litro</em> (ficha de producto). <a href="https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/" target="_blank" rel="noopener">https://tacay.co/producto/aceite-de-nuez-de-cacay-x-litro/</a></li>
              <li>The Tico Times. (s. f.). [Artículo sobre la nuez de cacay en el sur de Colombia]. <a href="https://ticotimes.net/?p=62061" target="_blank" rel="noopener">https://ticotimes.net/?p=62061</a></li>
              <li>TradeFairDates. (s. f.). <em>VIVANESS Nuremberg</em>. <a href="https://www.tradefairdates.com/VIVANESS-M6060/Nuremberg.html" target="_blank" rel="noopener">https://www.tradefairdates.com/VIVANESS-M6060/Nuremberg.html</a></li>
              <li>Universidad de los Andes, Facultad de Derecho. (2026). <em>¿Cómo registrar mi marca?</em> <a href="https://derecho.uniandes.edu.co/wp-content/uploads/2025/09/Como-Registrar-mi-Marca.pdf" target="_blank" rel="noopener">https://derecho.uniandes.edu.co/wp-content/uploads/2025/09/Como-Registrar-mi-Marca.pdf</a></li>
            </ol>
          </div>
          <div class="pe-ia-box">
            <strong>Uso de herramientas de inteligencia artificial (texto del documento):</strong> para la Fase 3 usamos Claude (Anthropic) como apoyo para buscar y organizar fuentes, revisar los cálculos de costos y redactar borradores de algunas secciones. El análisis, las decisiones del plan y la revisión de cada cifra frente a su fuente fueron del grupo. Para la presentación tipo sitio web usamos Antigravity, que nos ayudó con el diseño; los textos y los datos del sitio salen de este documento.
          </div>
        `
      }
    ]
  }
};

const RISK_DETAILS = {
  1: {
    title: "1. Riesgo Cambiario (Probabilidad Media / Impacto Medio)",
    desc: "El peso se revalúa y cada venta en dólares deja menos pesos. La TRM del 12 de noviembre de 2026 ($3.297,07) es 12,3 % menor que la de un año antes; Bancolombia la esperaba entre $3.120 y $3.300 en noviembre.",
    mit: "Fijar el precio en dólares en el contrato, cubrir cada pedido con un forward bancario y revisar precios cada seis meses. Una caída de 10 % en la TRM quitaría unos $4.600 por frasco."
  },
  2: {
    title: "2. Riesgo Normativo (Probabilidad Media / Impacto Alto)",
    desc: "Cambia la norma europea o una afirmación de la etiqueta no se puede sustentar. El Reglamento (UE) 2024/996 limita el retinol a 0,3 % en productos faciales y exige advertencia sobre la vitamina A.",
    mit: "No usar «retinol» en la etiqueta hasta medirlo; revisión de cada afirmación en el CPSR; alerta de la persona responsable sobre cambios en los anexos."
  },
  3: {
    title: "3. Riesgo Sanitario (Probabilidad Media / Impacto Alto)",
    desc: "Un lote se oxida o sale distinto y el importador lo rechaza (72,7 % de ácido linoleico, grasa poliinsaturada que se oxida con luz y calor).",
    mit: "Frasco ámbar, vitamina E, análisis de peróxidos por lote, bodega fresca y fecha PAO en la etiqueta."
  },
  4: {
    title: "4. Riesgo Logístico (Probabilidad Media / Impacto Medio)",
    desc: "Se rompen frascos o el envío se demora o encarece (capacidad aérea limitada en 2026; recargos en noviembre y diciembre).",
    mit: "Separadores de cartón, seguro, tarifa cerrada con agente de carga y evitar noviembre–diciembre y los picos de flores (enero–febrero y abril–mayo)."
  },
  5: {
    title: "5. Competencia Internacional (Probabilidad Alta / Impacto Medio)",
    desc: "Los compradores prefieren aceites conocidos y más baratos (8,49 a 14,90 € por 30 ml en Alemania) y Perú promueve sus ingredientes amazónicos.",
    mit: "No competir por precio: tiendas naturales y farmacias especializadas, muestras, trazabilidad y estudios independientes."
  },
  6: {
    title: "6. Riesgo de Abastecimiento (Probabilidad Media / Impacto Alto)",
    desc: "Falta nuez o aceite: la cosecha va de febrero a abril y en el Meta solo dos empresas extraen aceite en frío.",
    mit: "Contrato anual con compra anticipada en cosecha, inventario de seguridad de seis meses y segundo proveedor (Tacay o CaryO)."
  }
};

let currentPhaseId = null;
let currentSlideIdx = 0;
let isSidebarOpen = true;

function openStrategicHub() {
  const dropdown = document.getElementById("plan-dropdown");
  const triggerBtn = document.getElementById("plan-trigger-btn");
  if (dropdown) dropdown.classList.remove("open");
  if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "false");

  document.getElementById("store-main-view").setAttribute("hidden", "");
  document.querySelector(".page-dots")?.setAttribute("hidden", "");

  const strategicView = document.getElementById("strategic-view");
  strategicView.removeAttribute("hidden");

  document.getElementById("pe-hub-view").removeAttribute("hidden");
  document.getElementById("pe-deck-view").setAttribute("hidden", "");

  currentPhaseId = null;
  document.querySelectorAll(".pe-phase-pill").forEach((pill) => pill.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openStrategicPhase(phaseNumber, slideIndex = 0) {
  const dropdown = document.getElementById("plan-dropdown");
  const triggerBtn = document.getElementById("plan-trigger-btn");
  if (dropdown) dropdown.classList.remove("open");
  if (triggerBtn) triggerBtn.setAttribute("aria-expanded", "false");

  const phase = STRATEGIC_PHASES[phaseNumber];
  if (!phase) return;

  currentPhaseId = phaseNumber;
  currentSlideIdx = slideIndex;

  document.getElementById("store-main-view").setAttribute("hidden", "");
  document.querySelector(".page-dots")?.setAttribute("hidden", "");

  const strategicView = document.getElementById("strategic-view");
  strategicView.removeAttribute("hidden");

  document.getElementById("pe-hub-view").setAttribute("hidden", "");
  document.getElementById("pe-deck-view").removeAttribute("hidden");

  document.querySelectorAll(".pe-phase-pill").forEach((pill) => {
    pill.classList.toggle("active", Number(pill.dataset.phase) === phaseNumber);
  });

  renderCurrentSlide();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCurrentSlide() {
  const phase = STRATEGIC_PHASES[currentPhaseId];
  if (!phase) return;

  const slides = phase.slides;
  const slide = slides[currentSlideIdx];
  const total = slides.length;

  // Actualizar índice lateral
  const sidebarTitle = document.getElementById("pe-sidebar-title");
  if (sidebarTitle) sidebarTitle.textContent = phase.shortTitle;

  const indexList = document.getElementById("pe-index-list");
  if (indexList) {
    indexList.innerHTML = slides
      .map(
        (s, idx) => `
        <button type="button" class="pe-index-item ${idx === currentSlideIdx ? "active" : ""}" onclick="goToSlide(${idx})">
          <span class="pe-index-num">${idx + 1}.</span>
          <span>${s.indexTitle}</span>
        </button>
      `
      )
      .join("");
  }

  // Barra de progreso y contador
  const pct = ((currentSlideIdx + 1) / total) * 100;
  document.getElementById("pe-progress-fill").style.width = `${pct}%`;
  document.getElementById("pe-slide-counter").textContent = `Diapositiva ${currentSlideIdx + 1} de ${total}`;

  // Botones anterior / siguiente
  document.getElementById("pe-prev-btn").disabled = currentSlideIdx === 0;
  const nextBtn = document.getElementById("pe-next-btn");
  if (currentSlideIdx === total - 1) {
    if (currentPhaseId < 3) {
      nextBtn.disabled = false;
      nextBtn.textContent = `Ir a la Fase ${currentPhaseId + 1} →`;
    } else {
      nextBtn.disabled = false;
      nextBtn.textContent = "Volver al Plan Estratégico";
    }
  } else {
    nextBtn.disabled = false;
    nextBtn.textContent = "Siguiente →";
  }

  // Renderizar lienzo de la diapositiva
  const canvas = document.getElementById("pe-slide-canvas");
  canvas.className = `pe-slide-canvas ${slide.isCover ? "slide-cover" : ""}`;

  const nextActionFooter =
    currentSlideIdx === total - 1
      ? currentPhaseId < 3
        ? `<button type="button" class="pe-arrow-btn" onclick="openStrategicPhase(${currentPhaseId + 1}, 0)">Ir a la Fase ${currentPhaseId + 1} →</button>`
        : `<button type="button" class="pe-arrow-btn" onclick="openStrategicHub()">Volver al plan estratégico</button>`
      : "";

  canvas.innerHTML = `
    <div>
      <div class="pe-slide-header">
        <div class="pe-slide-meta-row">
          <span class="pe-slide-code">${phase.shortTitle} · ${slide.code}</span>
          ${slide.priority ? `<span class="pe-priority-badge">${slide.priority}</span>` : ""}
        </div>
        <h2 class="pe-slide-title">${slide.title}</h2>
        <div class="pe-key-message">${slide.keyMessage}</div>
      </div>
      <div class="pe-slide-body">
        ${slide.html}
      </div>
    </div>
    <div class="pe-slide-footer">
      <span><strong>Fuente:</strong> ${slide.source}</span>
      ${nextActionFooter}
    </div>
  `;
}

function goToSlide(idx) {
  const phase = STRATEGIC_PHASES[currentPhaseId];
  if (!phase || idx < 0 || idx >= phase.slides.length) return;
  currentSlideIdx = idx;
  renderCurrentSlide();
}

function prevSlide() {
  if (currentSlideIdx > 0) {
    currentSlideIdx--;
    renderCurrentSlide();
  }
}

function nextSlide() {
  const phase = STRATEGIC_PHASES[currentPhaseId];
  if (!phase) return;
  if (currentSlideIdx < phase.slides.length - 1) {
    currentSlideIdx++;
    renderCurrentSlide();
  } else if (currentPhaseId < 3) {
    openStrategicPhase(currentPhaseId + 1, 0);
  } else {
    openStrategicHub();
  }
}

function toggleSlideSidebar() {
  isSidebarOpen = !isSidebarOpen;
  const layout = document.getElementById("pe-deck-layout");
  const sidebar = document.getElementById("pe-sidebar");
  if (isSidebarOpen) {
    layout.classList.add("with-sidebar");
    sidebar.removeAttribute("hidden");
  } else {
    layout.classList.remove("with-sidebar");
    sidebar.setAttribute("hidden", "");
  }
}

function toggleCopColumn() {
  const wrap = document.getElementById("tabla-17-wrap");
  const btn = document.getElementById("btn-toggle-cop");
  if (!wrap || !btn) return;
  const hidden = wrap.classList.toggle("hide-cop");
  btn.classList.toggle("active", !hidden);
}

function showRiskDetail(riskId) {
  const data = RISK_DETAILS[riskId];
  if (!data) return;
  const titleEl = document.getElementById("risk-insp-title");
  const descEl = document.getElementById("risk-insp-desc");
  const mitEl = document.getElementById("risk-insp-mit");
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;
  if (mitEl) mitEl.textContent = data.mit;
}

// Navegación con flechas del teclado (← / →) cuando el visor está abierto
document.addEventListener("keydown", (event) => {
  const strategicView = document.getElementById("strategic-view");
  const deckView = document.getElementById("pe-deck-view");
  if (!strategicView || strategicView.hasAttribute("hidden")) return;
  if (!deckView || deckView.hasAttribute("hidden")) return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    prevSlide();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    nextSlide();
  }
});
