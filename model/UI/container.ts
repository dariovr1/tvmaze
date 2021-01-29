export interface IView {
    flex: number;
    bg: String;
    width: String;
    height: String;
    direction: "row" | "column" ;
    justify: String;
    alignitems: "center" | "flex-end" | "flex-start";
    padding: String;
    wrap: "nowrap" | "wrap" | "wrap-reverse";
  }
  