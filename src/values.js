"use strict";

module.exports = {
  APEX_NAMES: {
    CLASS_DECLARATION: "apex.jorje.data.ast.ClassDecl",
    LOCATION_IDENTIFIER: "apex.jorje.data.Identifiers$LocationIdentifier",
    PARSER_OUTPUT: "apex.jorje.semantic.compiler.parser.ParserOutput",
    CLASS_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ClassTypeRef",
    ARRAY_TYPE_REF: "apex.jorje.data.ast.TypeRefs$ArrayTypeRef",
    INNER_CLASS_MEMBER: "apex.jorje.data.ast.BlockMember$InnerClassMember",
    MODIFIER: "apex.jorje.data.ast.Modifier",
    ANNOTATION: "apex.jorje.data.ast.Modifier$Annotation",
    ANNOTATION_KEY_VALUE: "apex.jorje.data.ast.AnnotationParameter$AnnotationKeyValue",
    ANNOTATION_VALUE: "apex.jorje.data.ast.AnnotationValue",
    METHOD_MEMBER: "apex.jorje.data.ast.BlockMember$MethodMember",
    METHOD_DECLARATION: "apex.jorje.data.ast.MethodDecl",
    EMPTY_MODIFIER_PARAMETER_REF: "apex.jorje.data.ast.ParameterRefs$EmptyModifierParameterRef",
    BLOCK_STATEMENT: "apex.jorje.data.ast.Stmnt$BlockStmnt",
    RETURN_STATEMENT: "apex.jorje.data.ast.Stmnt$ReturnStmnt",
    VARIABLE_DECLARATION_STATEMENT: "apex.jorje.data.ast.Stmnt$VariableDeclStmnt",
    VARIABLE_DECLARATIONS: "apex.jorje.data.ast.VariableDecls",
    VARIABLE_DECLARATION: "apex.jorje.data.ast.VariableDecl",
    NEW_EXPRESSION: "apex.jorje.data.ast.Expr$NewExpr",
    NEW_LIST_INIT: "apex.jorje.data.ast.NewObject$NewListInit",
    NEW_LIST_LITERAL: "apex.jorje.data.ast.NewObject$NewListLiteral",
    NEW_MAP_INIT: "apex.jorje.data.ast.NewObject$NewMapInit",
    NEW_STANDARD: "apex.jorje.data.ast.NewObject$NewStandard",
    METHOD_CALL_EXPRESSION: "apex.jorje.data.ast.Expr$MethodCallExpr",
    BINARY_EXPRESSION: "apex.jorje.data.ast.Expr$BinaryExpr",
    LITERAL_EXPRESSION: "apex.jorje.data.ast.Expr$LiteralExpr",
    BINARY_OPERATION: "apex.jorje.data.ast.BinaryOp",
    ASSIGNMENT_OPERATION: "apex.jorje.data.ast.AssignmentOp",
    VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$VariableExpr",
    THIS_VARIABLE_EXPRESSION: "apex.jorje.data.ast.Expr$ThisVariableExpr",
    BOOLEAN_EXPRESSION: "apex.jorje.data.ast.Expr$BooleanExpr",
    BOOLEAN_OPERATION: "apex.jorje.data.ast.BooleanOp",
    NESTED_EXPRESSION: "apex.jorje.data.ast.Expr$NestedExpr",
    IF_ELSE_BLOCK: "apex.jorje.data.ast.Stmnt$IfElseBlock",
    IF_BLOCK: "apex.jorje.data.ast.IfBlock",
    ELSE_BLOCK: "apex.jorje.data.ast.ElseBlock",
    TERNARY_EXPRESSION: "apex.jorje.data.ast.Expr$TernaryExpr",
    EXPRESSION_STATEMENT: "apex.jorje.data.ast.Stmnt$ExpressionStmnt",
    ASSIGNMENT_EXPRESSION: "apex.jorje.data.ast.Expr$AssignmentExpr",

    // SOQL
    SOQL_EXPRESSION: "apex.jorje.data.ast.Expr$SoqlExpr",
    QUERY: "apex.jorje.data.soql.Query",
    SELECT_INNER_QUERY: "apex.jorje.data.soql.SelectExpr$SelectInnerQuery",
    SELECT_COLUMN_CLAUSE: "apex.jorje.data.soql.SelectClause$SelectColumnClause",
    SELECT_COUNT_CLAUSE: "apex.jorje.data.soql.SelectClause$SelectCountClause",
    SELECT_COLUMN_EXPRESSION: "apex.jorje.data.soql.SelectExpr$SelectColumnExpr",
    FIELD: "apex.jorje.data.soql.Field",
    FIELD_IDENTIFIER: "apex.jorje.data.soql.FieldIdentifier",
    FROM_CLAUSE: "apex.jorje.data.soql.FromClause",
    FROM_EXPRESSION: "apex.jorje.data.soql.FromExpr",
    WHERE_CLAUSE: "apex.jorje.data.soql.WhereClause",
    WHERE_INNER_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereInnerExpr",
    WHERE_OPERATION_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereOpExpr",
    WHERE_OPERATION_EXPRESSIONS: "apex.jorje.data.soql.WhereExpr$WhereOpExprs",
    APEX_EXPRESSION: "apex.jorje.data.soql.QueryExpr$ApexExpr",
    COLON_EXPRESSION: "apex.jorje.data.soql.ColonExpr",
    ORDER_BY_CLAUSE: "apex.jorje.data.soql.OrderByClause",
    ORDER_BY_EXPRESSION: "apex.jorje.data.soql.OrderByExpr",
    GROUP_BY_CLAUSE: "apex.jorje.data.soql.GroupByClause",
    GROUP_BY_EXPRESSION: "apex.jorje.data.soql.GroupByExpr",
    HAVING_CLAUSE: "apex.jorje.data.soql.HavingClause",
    LIMIT_VALUE: "apex.jorje.data.soql.LimitClause$LimitValue",
    OFFSET_VALUE: "apex.jorje.data.soql.OffsetClause$OffsetValue",
    WHERE_COMPOUND_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereCompoundExpr",
    WHERE_COMPOUND_OPERATOR: "apex.jorje.data.soql.WhereCompoundOp",
    WHERE_UNARY_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereUnaryExpr",
    WHERE_UNARY_OPERATOR: "apex.jorje.data.soql.WhereUnaryOp",
    WHERE_DISTANCE_EXPRESSION: "apex.jorje.data.soql.WhereExpr$WhereDistanceExpr",
    DISTANCE_FUNCTION_EXPRESSION: "apex.jorje.data.soql.DistanceFunctionExpr",
    GEOLOCATION_LITERAL: "apex.jorje.data.soql.Geolocation$GeolocationLiteral",
    QUERY_LITERAL_EXPRESSION: "apex.jorje.data.soql.QueryExpr$LiteralExpr",
    QUERY_LITERAL: "apex.jorje.data.soql.QueryLiteral",
    QUERY_OPERATOR: "apex.jorje.data.soql.QueryOp",
    SOQL_ORDER: "apex.jorje.data.soql.Order",
    SOQL_ORDER_NULL: "apex.jorje.data.soql.OrderNull",
    TRACKING_TYPE: "apex.jorje.data.soql.TrackingType",
    QUERY_OPTION: "apex.jorje.data.soql.QueryOption",
    QUERY_USING_CLAUSE: "apex.jorje.data.soql.QueryUsingClause",
    USING: "apex.jorje.data.soql.UsingExpr$Using",
    UPDATE_STATS_CLAUSE: "apex.jorje.data.soql.UpdateStatsClause",
    UPDATE_STATS_OPTION: "apex.jorje.data.soql.UpdateStatsOption",
    WITH_VALUE: "apex.jorje.data.soql.WithClause$WithValue",
    WITH_DATA_CATEGORIES: "apex.jorje.data.soql.WithClause$WithDataCategories",
    DATA_CATEGORY: "apex.jorje.data.soql.DataCategory",
    DATA_CATEGORY_OPERATOR: "apex.jorje.data.soql.DataCategoryOperator",
  },
  BINARY: {
    ADDITION: "+",
    SUBTRACTION: "-",
    MULTIPLICATION: "*",
    DIVISION: "/",
    LEFT_SHIFT: "<<",
    RIGHT_SHIFT: ">>",
    UNSIGNED_RIGHT_SHIFT: ">>>",
    XOR: "^",
    AND: "&",
    OR: "|",
  },
  BOOLEAN: {
    DOUBLE_EQUAL: "==",
    TRIPLE_EQUAL: "===",
    NOT_TRIPLE_EQUAL: "!==",
    NOT_EQUAL: "!=",
    ALT_NOT_EQUAL: "<>",
    LESS_THAN: "<",
    GREATER_THAN: ">",
    LESS_THAN_EQUAL: "<=",
    GREATER_THAN_EQUAL: ">=",
    AND: "&&",
    OR: "||",
  },
  ASSIGNMENT: {
    EQUALS: "=",
    AND_EQUALS: "&=",
    OR_EQUALS: "|=",
    XOR_EQUALS: "^=",
    ADDITION_EQUALS: "+=",
    SUBTRACTION_EQUALS: "-=",
    MULTIPLICATION_EQUALS: "*=",
    DIVISION_EQUALS: "/=",
    LEFT_SHIFT_EQUALS: "<<=",
    RIGHT_SHIFT_EQUALS: ">>=",
    UNSIGNED_RIGHT_SHIFT_EQUALS: ">>>=",
  },
  POSTFIX: {
    INC: "++",
    DEC: "--",
  },
  PREFIX: {
    POSITIVE: "+",
    NEGATIVE: "-",
    NOT: "!",
    BITWISE_COMPLEMENT: "~",
    INC: "++",
    DEC: "--",
  },
  QUERY: {
    QueryIncludes: "INCLUDES",
    QueryExcludes: "EXCLUDES",
    QueryEqual: "=",
    QueryDoubleEqual: "==",
    QueryTripleEqual: "===",
    QueryNotEqual: "!=",
    QueryNotTripleEqual: "!==",
    QueryLike: "LIKE",
    QueryLessThanEqual: "<=",
    QueryGreaterThanEqual: ">=",
    QueryLessThan: "<",
    QueryGreaterThan: ">",
    QueryIn: "IN",
    QueryNotIn: "NOT IN",
  },
  ORDER: {
    OrderDesc: "DESC",
    OrderAsc: "ASC",
  },
  ORDER_NULL: {
    OrderNullFirst: "NULLS FIRST",
    OrderNullLast: "NULLS LAST",
  },
  QUERY_WHERE: {
    QueryAnd: "AND",
    QueryOr: "OR",
  },
  ANNOTATION_VALUE: {
    TrueAnnotationValue: "true",
    FalseAnnotationValue: "false",
  },
  MODIFIER: {
    PublicModifier: "public",
    PrivateModifier: "private",
    VirtualModifier: "virtual",
    HiddenModifier: "hidden",
    ProtectedModifier: "protected",
    AbstractModifier: "abstract",
    StaticModifier: "static",
    TestMethodModifier: "testMethod",
    WebServiceModifier: "webService",
    FinalModifier: "final",
    TransientModifier: "transient",
    GlobalModifier: "global",
    WithoutSharingModifier: "without sharing",
    WithSharingModifier: "with sharing",
  },
  DATA_CATEGORY: {
    DataCategoryAt: "AT",
    DataCategoryAbove: "ABOVE",
    DataCategoryBelow: "BELOW",
    DataCategoryAboveOrBelow: "ABOVE_OR_BELOW",
  },
};
