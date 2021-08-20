import {set} from "./curaSet";

export const standardQuality = [
    // Quality
    set('layer_height', 0.2),
    set('layer_height_0', 0.2),

    // Shell
    set('wall_thickness', 1.2),
    set('wall_line_count', 3),
    set('top_bottom_thickness', 0.8),
    set('top_thickness', 0.8),
    set('top_layers', 4),
    set('bottom_thickness', 0.8),
    set('bottom_layers', 4),

    // Infill
    set('infill_sparse_thickness', 0.2),
    set('skin_preshrink', 1.2),
    set('top_skin_preshrink', 1.2),
    set('bottom_skin_preshrink', 1.2),
    set('expand_skins_expand_distance', 1.2),
    set('top_skin_expand_distance', 1.2),
    set('bottom_skin_expand_distance', 1.2),
    set('min_skin_width_for_expansion', 4.90E-17),

    // cooling
    set('cool_fan_full_at_height', 0.6),

    // support
    set('support_angle', 45),
    set('support_z_distance', 0.2),
    set('support_top_distance', 0.2),
    set('support_bottom_distance', 0.2),
    set('support_infill_sparse_thickness', 0.2),
    set('support_interface_height', 1),
    set('support_roof_height', 1),
    set('support_bottom_height', 1),

    // Build Plate Adhesion
    set('raft_surface_thickness', 0.2),
    set('raft_interface_thickness', 0.3),
    set('raft_base_thickness', 0.24),

    // Experimental
    set('adaptive_layer_height_enabled', false)
]