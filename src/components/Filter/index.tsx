import { FilterStatus } from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { CircleCheck } from "lucide-react-native";

type TouchableOpacityAtributtes = TouchableOpacityProps;

interface FilterProps extends TouchableOpacityAtributtes {
    status: FilterStatus,
    isActive: boolean
}

export default function Filter({ status, isActive, ...rest }: FilterProps) {

    return (
        <TouchableOpacity
            style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
            activeOpacity={0.8}
            {...rest}>

            <CircleCheck size={18} color="#000" />
            <Text style={styles.text}>
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>

        </TouchableOpacity>
    )
}