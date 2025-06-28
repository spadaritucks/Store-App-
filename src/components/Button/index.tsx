import { Text, TouchableOpacity, TouchableOpacityProps  } from "react-native";
import { styles } from "./styles";

type TouchableOpacityAtributtes = TouchableOpacityProps

interface ButtonProps extends TouchableOpacityAtributtes {
    title: string
}

export default function Button ({title, ...rest} : ButtonProps) {

    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}