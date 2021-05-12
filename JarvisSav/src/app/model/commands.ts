export interface Command {
    word?: string[];
    function?: () => void;
    service?: any;
}
