<?php

namespace Drupal\decoupled_core\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Creates Node Read Write Interface Block.
 *
 * @Block(
 *  id = "node_read_write_block",
 *  admin_label = @Translation("Node Read Write Block Using React"),
 * )
 */
class NodeReadWrite extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Generate the markup for the node read write interface block.
    return [
      '#theme' => 'node_read_write_block',
      '#data' => '',
    ];
  }

}
