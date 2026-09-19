import MarkedItem from "../components/MarkedItem"
import Diagram from "../components/Diagram.jsx"
import CaseStudy from "../components/CaseStudy.jsx"
import csDiagram1_1 from "../assets/case-studies/chart_widget_refactor_before_after.svg"
import csDiagram1_2 from "../assets/case-studies/render_injection_pattern.svg"
import csDiagram2_1 from "../assets/case-studies/census_sync_flow.svg"
import csDiagram3_1 from "../assets/case-studies/AM-Style-Guide-thumb.png";
import csDiagram4_1 from "../assets/case-studies/explorer_performance_before_after.svg";
import styleGuide from "../assets/case-studies/AM-Style-Guide-Reference.pdf"
import bg_wrench from "../assets/bg-wrench-a.png"
export default function Work(){
  return(
    <div className="space-y-6k">
      <img
        src={bg_wrench}
        alt=""
        className="
          hidden
          md:block
          absolute
          -left-40
          -top-10
          h-auto
          w-120
          object-cover
          mix-blend-darken
          pointer-events-none
          select-none
          -z-10
          opacity-20
        "
      />

      <section className="mt-10 md:mt-30 md:ml-30 mr-0 md:mr-40 space-y-5">
        <h1 className="text-3xl md:text-5xl text-brand font-bold mb-8">Work examples</h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-8">React.js</h2>
        <CaseStudy 
          title="Led a full legacy-to-modern React rebuild of a production platform, shipped incrementally with zero downtime."
        >
          <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> Platform's variety of filter/chart widgets and broader codebase were built on legacy class-based React, with deep multi-level inheritance blocking modern patterns and slowing feature development.</MarkedItem>
          <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> Rewrote the component hierarchy from the ground up (most-specific child renders first, passes data upward), shipping 1–2 widget conversions a month so refactored and legacy code could safely coexist alongside ongoing feature work. Extended the pattern platform-wide once the hardest widgets were done.</MarkedItem>
          <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> Modern, maintainable component architecture across the entire platform, achieved without a feature freeze or a rewrite-everything gamble.</MarkedItem>
          <Diagram title="Chart widget refactoring">
            <img className="w-fit md:w-150 pt-10 pb-5 h-auto m-auto" src={csDiagram1_1} />
          </Diagram>
          <h4 className="font-bold text-xl">Additional problem solved: <span className="font-normal block">Replaced method-override customization with an injected render function and a sensible default — same flexibility, no inheritance chain.</span></h4>
          <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> One family of widgets needed much more customized rendering than the rest — extra per-item controls, a different interaction model — while still sharing all the same data-fetching, filtering, and search behavior everything else used. The class-based answer was subclassing and method overrides — exactly the rigid, hard-to-trace pattern the modernization was meant to eliminate.</MarkedItem>
          <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> Restructured it functionally: a shared widget component owns the core data hook and a default render function, but accepts an optional custom render function as a prop. A specialized variant supplies its own render function; the shared component uses it if present and falls back to its default otherwise. That shared component then wraps a common presentational layer (titles, search, filter chrome) that never has to know which variant is rendering through it.</MarkedItem>
          <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> Specialized and simple widgets now share the same data layer and outer chrome, with customization isolated to a single injected function instead of scattered across an inheritance chain — easier to trace, easier to test, easier to extend.</MarkedItem>
          <Diagram title="Functional render & method overrides">
            <img className="w-full md:w-70 pt-10 pb-5 h-auto m-auto" src={csDiagram1_2} />
          </Diagram>
        </CaseStudy>
        <CaseStudy 
          title="When a promised third-party integration fell through, I designed and built a full order-to-destination sync flow from scratch — polling, validation, and all — and still hit the deadline."
        >
        <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> A planned turnkey data-sync integration (via a third-party vendor) fell through late, with a hard external deadline still in place.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> Built the full order-to-destination flow from scratch: once a user selects an external destination for an order and finalizes it, the app kicks off asynchronous backend table creation and polls until setup is confirmed complete.<br /><br /> From there, a configuration wizard walks through selecting a destination sub-object, choosing a sync behavior (update, upsert, insert, mirror, append, delete) with type-specific advanced settings, and mapping source fields to destination fields — creating new destination fields from source data when needed, allowing custom fields, and validating that no destination field gets mapped twice, with unmapped fields surfaced clearly rather than silently dropped.<br /><br />A summary modal reviews the full mapping before the order is placed, so nothing syncs without an explicit final confirmation.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> Shipped on the original deadline despite building the entire flow — including edge-case handling like setup polling and mapping validation that many teams would have deferred to a later version. Later simplified and rebuilt the integration against the company's own API for a cleaner long-term result.</MarkedItem>
        <Diagram title="Fivetran sync flow">
          <img className="w-full md:w-130 pt-10 pb-5 h-auto m-auto" src={csDiagram2_1} />
        </Diagram>
        </CaseStudy>
        <CaseStudy 
          title="Built a data platform's first design system, without slowing down the roadmap to do it."
        >
        <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> Platform had grown fast with no shared visual or component language — every new feature reinvented its own patterns.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> Initiated and led Figma-based design system work: token-based color system as the foundation (architected to extend to typography and spacing), a documented component style guide, and an ongoing audit-and-replace process for inconsistent patterns.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> Single-source-of-truth design tokens now used platform-wide; new features have a consistent starting point instead of reinventing UI decisions each time.</MarkedItem>
        <Diagram className="max-w-[600px] pb-0" title="Style Guide Reference">
          <a href={styleGuide} target="_blank"><img className="w-full md:w-330 md:pt-10 md:pl-10 md:pr-10 h-auto m-auto" src={csDiagram3_1} /></a>        </Diagram>
        </CaseStudy>
        <CaseStudy 
          title="Cut a core page's data calls by 60%+ without users ever noticing anything changed except speed."
        >
        <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> The platform's main workflow page (a large demographic data set filtering and geographic mapping tool) was making 10+ API calls and 21 re-render cycles per load — sluggish, and invisible-cause to diagnose.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> Traced the cascade systematically (with AI-assisted analysis) and found the real culprit wasn't obviously "broken" code — it was state that looked unchanged but wasn't. The clearest example: the map component was reporting zoom and center-point changes to the 10th decimal place on every render, with no actual user interaction — tiny floating-point drift that React's default equality checks treated as a real change, re-triggering a cascade of dependent useEffects each cycle. Fixed it with better change-detection (checking whether values had meaningfully changed, not just technically changed), debouncing, and memoization across the affected components.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> Reduced to 3 API calls and 3 re-render cycles — a substantial, user-felt responsiveness improvement with zero visual or feature change. It also made the codebase noticeably easier to debug going forward: far less breakpoint-stepping and console-log noise to wade through when tracking down unrelated issues, since state was no longer firing on changes that weren't real.</MarkedItem>
        <Diagram className="max-w-[800px]" title="Main workflow page performance improvement">
          <img className="w-fit md:w-330 pt-10 pl-10 pr-10 h-auto m-auto" src={csDiagram4_1} />
        </Diagram>
        </CaseStudy>
        <CaseStudy
          title="Built and deployed a small, no-backend React app for emergency-preparedness planning, then made it embeddable as a drop-in web component."
        >
        <MarkedItem><span className="text-brand text-xl font-bold block">Problem:</span> An author who wrote a book on preparedness needed a supplemental calculator as a digital resource for the companion book website.<br /><br />Households and neighborhood groups preparing for emergencies need to know how many days of water and food they actually have stored. The math is simple but tedious by hand (calories per serving × servings × containers, summed across every item, divided by household size) and has to be redone every time the inventory changes. It needed to work with no accounts and no server, survive a page reload, print cleanly, and be usable on other people's sites, not just mine.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">What I did:</span> <strong>State and data flow.</strong> One lifted state object holds household size, gallons of water, and the food inventory. Children never mutate it; they call an update function that takes the previous state (<code>setData(prev =&gt; …)</code>), and the list component owns add, edit, and remove, keyed by generated ID rather than array index. "Days of water" and "days of food" are never stored: they're derived on every render by pure functions, so there's no second copy of the truth to keep in sync and no effects doing the syncing.<br /><br />
        <strong>Persistence.</strong> A small custom <code>useLocalStorage</code> hook (lazy initial read, write-on-change, guarded against unavailable or corrupt storage) keeps the whole inventory across sessions with no backend.<br /><br />
        <strong>Input handling.</strong> Numeric fields track a raw value and a display value: formatted (<code>1,250.00</code>) at rest, plain editable text on focus, non-numeric characters stripped as you type. A single delegated Enter-key handler moves focus field to field, which fires the blur that applies the formatting. Modals render through <code>createPortal</code> with Escape-to-close and effect cleanup.<br /><br />
        <strong>Print.</strong> A separate report component plus screen-only / print-only CSS turns the page into an itemized, printable table instead of a screenshot of the form, and sets the document title so Save-as-PDF gets a dated filename.<br /><br />
        <strong>Embeddable widget.</strong> A second Vite build in library mode outputs a single <code>widget.js</code> that registers a <code>{'<food-water-calculator>'}</code> custom element and mounts the same React app inside a shadow root, so a host page's CSS can't leak in and the calculator's can't leak out. Modals normally portal to <code>document.body</code>, which would escape the shadow root and lose their styling, so the portal target is supplied through React context: the widget provides its shadow root, and the standalone app falls back to <code>document.body</code>. The keyboard handler resolves its inputs through <code>getRootNode()</code> for the same reason.<br /><br />
        <strong>Deploy.</strong> Multi-stage Docker build served by nginx, pushed to a droplet by GitHub Actions on every merge to main. Since <code>widget.js</code> isn't content-hashed and is loaded cross-origin, nginx serves it with <code>no-cache</code> so embedders never get a stale bundle.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">Result:</span> A deliberately small app (no state library, no router, no backend; React's built-ins plus Tailwind) that keeps a user's inventory between visits, produces a printable report, and can be dropped into any page with a script tag and one element. It also exercises the patterns that tend to trip people up in real projects: derived versus stored state, functional updates, stable keys, portals, effect cleanup, and mounting React outside its own document.</MarkedItem>
        <MarkedItem><span className="text-brand text-xl font-bold block">See it live:</span> <a href="https://foodwater.isaaclinder.com" target="_blank" rel="noreferrer" className="underline">foodwater.isaaclinder.com</a></MarkedItem>
        </CaseStudy>
      </section>
    </div>
    )
}
